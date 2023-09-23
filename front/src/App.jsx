import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(import.meta.env.VITE_API, { mode: "no-cors" });
      const data = await res.json();

      // setMessage(data.status);
    }

    fetchData();
  }, []);

  return <h1>{message}</h1>;
}

export default App;
