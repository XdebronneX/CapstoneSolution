import React from "react";
import { ProgressBar } from 'primereact/progressbar';
import { ProgressSpinner } from "primereact/progressspinner";

const Loader = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <ProgressSpinner mode="indeterminate" style={{ width: '200px' }} />
        </div>
    );
}

export default Loader;