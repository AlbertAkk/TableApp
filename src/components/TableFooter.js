import { Autocomplete, Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import * as React from "react";

const TableFooter = ({
  columns,
  chosenColumn,
  chosenCondition,
  filterValue,
  setChosenColumn,
  setChosenCondition,
  setFilterValue,
  applyFilterClicked
}) => {
  const [open, setOpen] = React.useState(false);

  const filterOptionsColumn = columns
    .map((element) => element.label)
    .filter((item) => item !== "Дата");

  const filterOptionsCondition = ["Равно", "Содержит", "Больше", "Меньше"];

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const changeColumn = (_, value) => {
    setChosenColumn(value);
  };

  const changeCondition = (_, value) => {
    setChosenCondition(value);
  };

  const changeValue = (e) => {
    setFilterValue(e.target.value);
  };

  const applyClicked = () => {
    applyFilterClicked()
    handleClickAway()
  }

  const styles = {
    position: "absolute",
    width: 300,
    bottom: "-100px",
    left: "200px",
    transform: "translate(-50%, -50%)",
    border: "1px solid",
    padding: "8px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };

  return (
    <div className="filterPagination">
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <button className="filtersBtn" onClick={handleClick}>
            Фильтр
          </button>
          {open ? (
            <Box sx={styles}>
              <Autocomplete
                id="columnFilter"
                options={filterOptionsColumn}
                sx={{ width: 300, marginTop: "20px" }}
                onChange={changeColumn}
                value={chosenColumn}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) => (
                  <TextField {...params} label="Столбец" />
                )}
              />
              <Autocomplete
                id="columnFilter"
                options={filterOptionsCondition}
                sx={{ width: 300, marginTop: "20px" }}
                onChange={changeCondition}
                value={chosenCondition}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) => (
                  <TextField {...params} label="Условие" />
                )}
              />
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                onChange={changeValue}
                value={filterValue}
                sx={{ width: 300, marginTop: "20px" }}
              />
              <Button
                variant="contained"
                sx={{ margin: "20px 0", width: "100%" }}
                onClick={applyClicked}
              >
                Применить
              </Button>
            </Box>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default TableFooter;
