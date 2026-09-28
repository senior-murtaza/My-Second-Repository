export default function Teachers() {
  return (
    <div className="teachers-page">
      <h1>Teachers Page</h1>

      <table className="teachers-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Teacher Name</th>
            <th>Subject</th>
            <th>Experience</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Ahmad</td>
            <td>Mathematics</td>
            <td>5 Years</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Rahim</td>
            <td>English</td>
            <td>3 Years</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Farid</td>
            <td>Physics</td>
            <td>7 Years</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Omid</td>
            <td>Computer Science</td>
            <td>4 Years</td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={4}>Mesbah High School — Teachers</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
