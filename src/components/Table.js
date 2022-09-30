import * as React from "react";
import { useState } from "react";
import tableData1 from "../mocks/tableData1";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableHead from "./TableHead";

const Table = () => {
  const [tableData, setTableData] = useState(tableData1);
  const [chosenColumn, setChosenColumn] = useState("");
  const [chosenCondition, setChosenCondition] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const columns = [
    { label: "Дата", columnName: "date" },
    { label: "Название", columnName: "name" },
    { label: "Количество", columnName: "quantity" },
    { label: "Расстояние", columnName: "distance" },
  ];

  const determineValue = (element) => {
    if (chosenColumn === "Название") {
      return element.name;
    }
    if (chosenColumn === "Количество") {
      return element.quantity;
    }
    if (chosenColumn === "Расстояние") {
      return element.distance;
    }
  };

  const calculateResult = () => {
    switch (chosenCondition) {
      case "Равно":
        const filteredArrayEqual = tableData1.filter(
          (element) => determineValue(element) === +filterValue
        );
        return filteredArrayEqual;
      case "Содержит":
        const filteredArrayIncludes = tableData1.filter((element) =>
          new String(determineValue(element)).includes(filterValue)
        );
        return filteredArrayIncludes;
      case "Больше":
        const filteredArrayGreater = tableData1.filter(
          (element) => determineValue(element) > +filterValue
        );
        return filteredArrayGreater;
      case "Меньше":
        const filteredArrayLess = tableData1.filter(
          (element) => determineValue(element) < +filterValue
        );
        return filteredArrayLess;
      default:
        return tableData1;
    }
  };

  const applyFilterClicked = () => {
    const filteredTableData = calculateResult();
    setTableData(filteredTableData);
  };

  return (
    <div className="tableWrapper">
      <table className="table">
        <TableHead columns={columns} />
        <TableBody columns={columns} tableData={tableData} />
      </table>
      <div className="tableFooter">
        <TableFooter
          columns={columns}
          chosenColumn={chosenColumn}
          chosenCondition={chosenCondition}
          filterValue={filterValue}
          setChosenColumn={setChosenColumn}
          setChosenCondition={setChosenCondition}
          setFilterValue={setFilterValue}
          applyFilterClicked={applyFilterClicked}
        />
      </div>
    </div>
  );
};

export default Table;
