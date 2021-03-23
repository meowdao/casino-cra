import React, {forwardRef, useImperativeHandle, useState} from "react";
import {DataGrid} from "@material-ui/data-grid";

import useStyles from "./styles";

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

export const Results = forwardRef<IResultsSelectorRef, IResultsSelectorProps>((_props, ref) => {
  const [rows, setRows] = useState<Array<IRow>>([]);
  const classes = useStyles();

  useImperativeHandle(ref, () => ({
    addRow: ([slot1, slot2, slot3]: Array<string>): void => {
      setRows([...rows, {id: rows.length, slot1, slot2, slot3, timestamp: Date.now()}]);
    },
  }));

  const columns = [
    {field: Column.id, headerName: "ID", type: "number", flex: 1},
    {field: Column.slot1, headerName: "Slot 1", sortable: false, flex: 1},
    {field: Column.slot2, headerName: "Slot 2", sortable: false, flex: 1},
    {field: Column.slot3, headerName: "Slot 3", sortable: false, flex: 1},
    {
      field: Column.timestamp,
      headerName: "Time",
      type: "number",
      valueFormatter: (params: any) => new Date(params.value).toLocaleString(),
      flex: 1,
    },
  ];

  return (
    <div className={classes.root}>
      <DataGrid pageSize={10} columns={columns} rows={rows} autoPageSize />
    </div>
  );
});
