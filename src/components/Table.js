import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function Table(props) {
  const photoImage = (e) => {
    return <img src={e} alt="Dummy" width="80" height="80" />;
  };

  return (
    <DataTable scrollable={true} scrollHeight="30vh" value={props.tableData}>
      <Column
        field="thumbnailUrl"
        header="Image"
        body={(e) => photoImage(e.thumbnailUrl)}
      ></Column>
      <Column field="id" header="Id"></Column>
      <Column field="url" header="URL"></Column>
      <Column field="title" header="Title"></Column>
    </DataTable>
  );
}

export default Table;
