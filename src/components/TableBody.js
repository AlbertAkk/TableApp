import { useState } from "react";
import ReactPaginate from "react-paginate";
import "../styles.css";

const TableBody = ({ tableData, columns }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const elementsPerPage = 10;
  const pagesVisited = pageNumber * elementsPerPage;
  const displayElements = tableData
    .slice(pagesVisited, pagesVisited + elementsPerPage)
    .map((data) => {
      return (
        <tr key={data.id} className="tableRow">
          {columns.map(({ columnName: columnName }) => {
            const tData = data[columnName] ? data[columnName] : "——";
            return (
              <td key={columnName} className="dataItem">
                {tData}
              </td>
            );
          })}
        </tr>
      );
    });

  const pageCount = Math.ceil(tableData.length / elementsPerPage);

  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <tbody>
      {displayElements}
      <ReactPaginate
        breakLabel="..."
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        previousLabel={"Предыдущая"}
        nextLabel={"Следующая"}
        pageCount={pageCount}
        onPageChange={pageChange}
        containerClassName={"paginationBtns"}
        previoudLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"disabledBtn"}
        activeClassName={"activeBtn"}
        renderOnZeroPageCount={null}
      />
    </tbody>
  );
};

export default TableBody;
