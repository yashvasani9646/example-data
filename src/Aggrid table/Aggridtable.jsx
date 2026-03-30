import React, { useState } from 'react'
import { AgGridProvider } from 'ag-grid-react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

ModuleRegistry.registerModules([AllCommunityModule]);


const Aggridtable = () => {
    const [rowData, setRowData] = useState([
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },  
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: true },
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: true },
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: true },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: true },
        { make: "Toyota", model: "Corolla", price: 29600, electric: true },
    ]);

    const [colDefs] = useState([
        { field: "make", flex: 3 },
        { field: "model", flex: 1 },
        { field: "price", flex: 1 },
        { field: "electric", flex: 1 }
    ]);

    return (
        <div className="ag-theme-alpine" style={{ height: 500 }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                theme="legacy"
            />
        </div>
    )   
}

export default Aggridtable 