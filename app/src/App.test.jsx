import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, expect, test, vi } from 'vitest'
import App from './App.jsx'

const DATA = [
  {
    id: '1',
    judul: 'Agak Laen',
    kategori: 'Komedi',
    sutradara: 'Muhadkly Acho',
    tahunRilis: 2024,
    rating: 9,
  },
]

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify(DATA))))
})

function buka(path) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

test('menampilkan data hasil fetch di halaman koleksi', async () => {
  buka('/koleksi')
  expect(await screen.findByText('Agak Laen')).toBeInTheDocument()
})

test('form menolak judul kosong', async () => {
  buka('/tambah')
  await userEvent.click(screen.getByRole('button', { name: 'Simpan' }))
  expect(screen.getByRole('alert')).toHaveTextContent('Judul wajib diisi')
})

test('rute tidak dikenal menampilkan 404', () => {
  buka('/tidak-ada')
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})

test('beranda menampilan judul', () => {
  buka('/')
  expect(screen.getByRole('heading', { name: 'LAYARKACA24' })).toBeInTheDocument()
})

test('tentang menampilan nama', () => {
  buka('/tentang')
  expect(screen.getByRole('heading', { name: 'Tentang' })).toBeInTheDocument()
})