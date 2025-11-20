import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await axios.get("http://localhost:5000/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setMsg(res.data.message);
      } catch {
        setMsg("Unauthorized");
      }
    };

    fetchData();
  }, []);

  return <h1>{msg}</h1>;
};

export default Dashboard;
