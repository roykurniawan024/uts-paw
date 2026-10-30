import useKoleksi from '../hooks/useKoleksi.js'
import './Statistik.css'
import RekapFilm from '../components/RekapFilm.jsx'

export default function Statistik() {
  const { items } = useKoleksi()
  const perKategori = items.reduce((hitung, { kategori }) => ({ ...hitung, [kategori]: (hitung[kategori] ?? 0) + 1 }), {})

  return (
    <section>
      <h1>Statistik</h1>
      <RekapFilm perKategori={perKategori} items={items} />
    </section>
  )
}