import React, {forwardRef, useImperativeHandle, useState} from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableSortLabel,
  TableRow,
} from "@material-ui/core";

export interface IResultsSelectorProps {}

export interface IResultsSelectorRef {
  addRow: (row: Array<string>) => void;
}

export enum Column {
  id = "id",
  slot1 = "slot1",
  slot2 = "slot2",
  slot3 = "slot3",
  timestamp = "timestamp",
}

export type IRow = {
  [key in keyof typeof Column]: string | number;
};

export interface IHeadCell {
  id: string;
  sortable: boolean;
  label: string;
}

const headCells: Array<IHeadCell> = [
  {id: Column.id, sortable: true, label: "ID"},
  {id: Column.slot1, sortable: false, label: "Slot 1"},
  {id: Column.slot2, sortable: false, label: "Slot 2"},
  {id: Column.slot3, sortable: false, label: "Slot 3"},
  {id: Column.timestamp, sortable: true, label: "Date"},
];

export enum Direction {
  asc = "asc",
  desc = "desc",
}

export const Results = forwardRef<IResultsSelectorRef, IResultsSelectorProps>((_props, ref) => {
  const [rows, setRows] = useState<Array<IRow>>([]);
  const [order, setOrder] = useState<Direction>(Direction.asc);
  const [orderBy, setOrderBy] = useState("id");

  useImperativeHandle(ref, () => ({
    addRow: ([slot1, slot2, slot3]: Array<string>): void => {
      setRows([...rows, {id: rows.length, slot1, slot2, slot3, timestamp: Date.now()}]);
    },
  }));

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === Direction.asc;
    setOrder(isAsc ? Direction.desc : Direction.asc);
    setOrderBy(property);
  };

  const descendingComparator = (a: any, b: any, orderBy: string) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const getComparator = (order: string, orderBy: string) => {
    return order === "desc"
      ? (a: any, b: any) => descendingComparator(a, b, orderBy)
      : (a: any, b: any) => -descendingComparator(a, b, orderBy);
  };

  const stableSort = (array: Array<IRow>, comparator: (a: any, b: any) => number) => {
    const stabilizedThis: Array<[IRow, number]> = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  };

  const createSortHandler = (property: string) => () => {
    handleRequestSort(property);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headCells.map(headCell => (
              <TableCell key={headCell.id}>
                {headCell.sortable ? (
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : Direction.asc}
                    onClick={createSortHandler(headCell.id)}
                  >
                    {headCell.label}
                  </TableSortLabel>
                ) : (
                  headCell.label
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {stableSort(rows, getComparator(order, orderBy)).map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.slot1}</TableCell>
              <TableCell>{row.slot2}</TableCell>
              <TableCell>{row.slot3}</TableCell>
              <TableCell>
                {new Date(row.timestamp)
                  .toISOString()
                  .replace("T", " ")
                  .replace(/\.\d{3}Z/, "")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
