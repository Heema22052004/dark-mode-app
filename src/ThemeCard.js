import React, { useState } from "react";

function ThemeCard(props) {
  const [darkMode, setDarkMode] = useState(false);

  const cardStyle = {
    
  backgroundColor: darkMode ? "#333" : "#eee",
  color: darkMode ? "#fff" : "#000",
  padding: "20px",
  borderRadius: "10px",
  width: "300px",
  margin: "20px auto",
  textAlign: "center",
  transition: "all 0.3s ease"

  };
  const buttonStyle = {
  padding: "10px 15px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  backgroundColor: darkMode ? "#fff" : "#333",
  color: darkMode ? "#333" : "#fff",
  marginTop: "10px"
};
const toggleTheme = () => {
  const newMode = !darkMode;
  setDarkMode(newMode);
  localStorage.setItem("theme", newMode ? "dark" : "light");
};

  return (
    <div style={cardStyle}>
      <h2>{props.title}</h2>

      <button
  style={buttonStyle} 
  onClick={toggleTheme}
>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default ThemeCard;