import React from "react";

function StatusMessage({ status }) {
  const getStatusStyle = () => {
    switch (status) {
      case "success":
        return { color: "green", backgroundColor: "#d4edda", padding: "10px", borderRadius: "5px" };
      case "error":
        return { color: "red", backgroundColor: "#f8d7da", padding: "10px", borderRadius: "5px" };
      case "warning":
        return { color: "orange", backgroundColor: "#fff3cd", padding: "10px", borderRadius: "5px" };
      default:
        return { color: "black", backgroundColor: "#f0f0f0", padding: "10px", borderRadius: "5px" };
    }
  };

  return (
    <div style={getStatusStyle()}>
      {status === "success" && "✅ Operation was successful!"}
      {status === "error" && "❌ There was an error!"}
      {status === "warning" && "⚠️ This is a warning!"}
      {!["success", "error", "warning"].includes(status) && "ℹ️ Unknown status"}
    </div>
  );
}

function CondStyling() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Conditional Styling Example</h2>
      <StatusMessage status="success" />
      <br />
      <StatusMessage status="error" />
      <br />
      <StatusMessage status="warning" />
      <br />
      <StatusMessage status="info" /> {/* Default case */}
    </div>
  );
}

export default CondStyling;
