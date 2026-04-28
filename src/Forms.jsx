import { useState } from "react";

function Forms() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedData({ name, email });

    // clear inputs
    setName("");
    setEmail("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "400px",
        margin: "50px auto",
        padding: "20px 40px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Simple Form</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Submit
      </button>

      {submittedData.name && (
        <h3 style={{ marginTop: "20px" }}>
          Name: {submittedData.name}
        </h3>
      )}

      {submittedData.email && (
        <h3>Email: {submittedData.email}</h3>
      )}
    </form>
  );
}

export default Forms;