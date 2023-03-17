import React from "react";

function Form({ topics, onSubmit, onChange }) {
    return (
        <div className="container mt-5">
            <div style={{ margin: "20px" }}>
                <p className="text-center">
                    Enter literally any three topics to generate a multiple choice quiz using the topics.
                </p>
            </div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="topic1">Topic 1</label>
                    <input
                        type="text"
                        className="form-control"
                        id="topic1"
                        value={topics[0]}
                        onChange={(event) => onChange(event, 0)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="topic2">Topic 2</label>
                    <input
                        type="text"
                        className="form-control"
                        id="topic2"
                        value={topics[1]}
                        onChange={(event) => onChange(event, 1)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="topic3">Topic 3</label>
                    <input
                        type="text"
                        className="form-control"
                        id="topic3"
                        value={topics[2]}
                        onChange={(event) => onChange(event, 2)}
                    />
                </div>
                <div className="text-center mt-3">
                    <button
                        type="submit"
                        className="btn btn-primary mt-4"
                        style={{
                            backgroundColor: "#008CBA",
                            borderColor: "#008CBA",
                            color: "#fff",
                            borderRadius: "5px",
                            padding: "10px 20px",
                            fontWeight: "bold",
                            fontSize: "1rem",
                        }}
                    >
                        Generate Quiz
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;