import React from 'react';
import './USpinner.styles.scss'
const USpinner = () => {
    return (
        <div className="spinner-grow text-primary spinner-size" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
}

export default USpinner;
