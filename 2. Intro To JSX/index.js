const App = () => {
  return (
    <>
      <table border="1">
        <caption>This is the caption</caption>
        <thead>
          <tr>
            <th>Col1</th>
            <th>Col2</th>
            <th>Col3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bikash</td>
            <td>27</td>
            <td>Assam</td>
          </tr>
          <tr>
            <td>Bikash</td>
            <td>27</td>
            <td>Assam</td>
          </tr>
          <tr>
            <td>Bikash</td>
            <td>27</td>
            <td>Assam</td>
          </tr>
        </tbody>
        <tfoot>Table Footer</tfoot>
      </table>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
