import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: 'Aksi', sutradara: '', tahunRilis: '', rating: '8' }

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }
    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Film</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option>Aksi</option>
        <option>Animasi</option>
        <option>Drama</option>
        <option>Dokumenter</option>
        <option>Horror</option>
        <option>Komedi</option>
      </select>

      <label htmlFor="sutradara">Sutradara</label>
      <input id="sutradara" name="sutradara" value={form.sutradara} onChange={ubah}></input>

      <label htmlFor="tahunRilis">Tahun Rilis</label>
      <input id="tahunRilis" name="tahunRilis" value={form.tahunRilis} onChange={ubah}></input>

      <label htmlFor="rating">Rating</label>
      <select id="rating" name="rating" value={form.rating} onChange={ubah}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>

      <button type="submit">Simpan</button>
    </form>
  )
}