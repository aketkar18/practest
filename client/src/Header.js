import React from "react";

function Header() {
  return (
    <div className="header bg-dark py-5">
      <h1
        className="text-white text-center display-1"
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: "bold",
        }}
      >
        Practest
      </h1>
      <h6
        className="text-white text-center"
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: "bold",
        }}
      >
        OpenAI GPT Powered Practice Tests
      </h6>
    </div>
  );
}

export default Header;
