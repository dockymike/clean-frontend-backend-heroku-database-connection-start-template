import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("/api")
      .then(response => setMessage(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>React-Node Heroku Setup</h1>
      <p>API Response: {message}</p>
    </div>
  );
}

export default App;
