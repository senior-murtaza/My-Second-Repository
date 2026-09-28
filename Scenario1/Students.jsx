export default function Students() {
  return (
    <div className="students-page">
      <h1>It is Students Page</h1>

      <table className="students-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Names</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Murtaza</td>
            <td>17</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ali</td>
            <td>19</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Mohammad</td>
            <td>20</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Abdullah</td>
            <td>16</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Hamid</td>
            <td>21</td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={3}>Mesbah High School</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
