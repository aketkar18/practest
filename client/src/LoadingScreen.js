import React from "react";

function LoadingScreen() {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border" role="status">
            </div>
            <span className="sr-only"> &nbsp; Generating...</span>
        </div>
    );
}

export default LoadingScreen; 