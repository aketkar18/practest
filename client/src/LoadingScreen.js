import React, { useEffect, useState } from "react";

function LoadingScreen() {
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowAlert(true);
        }, 30000);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    useEffect(() => {
        if (showAlert) {
            if (window.confirm("There was an unexpected error generating the quiz. Please try again.")) {
                window.location.reload();
            }
        }
    }, [showAlert]);

    if (showAlert) {
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