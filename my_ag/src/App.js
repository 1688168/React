import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";

const App = () => {
  const gridRef = useRef();
  const [columnDefs, setColumnDefs] = useState([
    { field: "make", checkboxSelection: true },
    { field: "model" },
    { field: "price" },
  ]);
  const [rowData, setRowData] = useState([]);
  // const [rowData] = useState([
  //   { make: "Toyota", model: "Celica", price: 35000 },
  //   { make: "Ford", model: "Mondeo", price: 36000 },
  //   { make: "Porsche", model: "Boxter", price: 75000 },
  // ]);

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((response) => response.json())
      .then((data) => setRowData(data));
  });

  const defaultColDef = useMemo(() => ({ sortable: true, filter: true }), []);

  const cellClickedListener = useCallback((e) => {
    console.log("cellClicked, e");
  });

  const pushMeClicked = useCallback((e) => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => node.make + " " + node.model)
      .join(", ");
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
    //gridRef.current.api.deselectAll();
  });

  return (
    <div className="ag-theme-alpine-dark" style={{ height: 400, width: 600 }}>
      <button onClick={pushMeClicked}>Push Me</button>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        rowSelection="multiple"
        animateRows={true}
        onCellClicked={cellClickedListener}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default App;
