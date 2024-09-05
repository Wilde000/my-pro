import React from "react";

const Table = (props) => {
  const { tableHeaders, tableContent } = props;

  return (
    <div>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {tableContent.map((content) => (
              <p>{content.row}</p>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
