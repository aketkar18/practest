import React, { useEffect, useState } from "react";

function LoadingScreen() {
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowAlert(true);
        }, 15000);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    if (showAlert) {
        if (window.confirm("There was an unexpected error generating the quiz. Please try again.")) {
            window.location.reload();
        }
        return null;
    }

    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border" role="status">
            </div>
            <span className="sr-only"> &nbsp; Generating...</span>
        </div>
    );
}

export default LoadingScreen; 