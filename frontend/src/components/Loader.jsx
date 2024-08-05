import React from "react";
import { ProgressBar } from 'primereact/progressbar';

const Loader = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <ProgressBar mode="indeterminate" style={{ width: '200px' }} />
        </div>
    );
}

export default Loader;