
const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map(({ label, columnName }) => {
          return <th key={columnName} className="tableHeadName">{label}</th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
