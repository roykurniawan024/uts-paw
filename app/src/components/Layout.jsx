import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

const MENU = [
  { ke: '/', label: 'Beranda' },
  { ke: '/koleksi', label: 'Koleksi' },
  { ke: '/tambah', label: 'Tambah' },
  { ke: '/statistik', label: 'Statistik' },
  { ke: '/tentang', label: 'Tentang' },
]

export default function Layout() {
  return (
    <div className="kerangka">
      <header id="header-tontonan" className="kepala">
        <strong>LK24</strong>
        <nav className="menu">
          {MENU.map(({ ke, label }) => (
            <NavLink key={ke} to={ke} end={ke === '/'}>
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main id="main-tontonan" className="isi">
        <Outlet />
      </main>
      <footer id="footer-tontonan" className="kaki">Ujian Tengah Semester Pengembangan Aplikasi Web</footer>
    </div>
  )
}