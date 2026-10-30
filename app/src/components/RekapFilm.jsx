export default function RekapFilm({ perKategori, items }) {
    return (
        <div className="tabel-gulir">
        <table className="tabel-data">
          <thead>
            <tr>
              <th>Kategori</th>
              <th>Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(perKategori).map(([kategori, jumlah]) => (
              <tr key={kategori}>
                <td>{kategori}</td>
                <td>{jumlah}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <td>{items.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
}