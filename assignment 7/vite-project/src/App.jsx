import React, { useEffect, useState } from "react";

export default function IPLPointsTable() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Fetching data from the API
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((response) => response.json())
      .then((data) => {
        // Sorting the data based on net run rate (NRR) in ascending order
        const sortedData = data.sort((a, b) => a.net_run_rate - b.net_run_rate);
        setTeams(sortedData);
      })
      .catch((error) => console.error("Error fetching IPL points data: ", error));
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>IPL Season 2022 Points Table</h1>
      <table style={{ margin: "20px auto", borderCollapse: "collapse", width: "80%" }} border="1">
        <thead>
          <tr>
            <th style={{ padding: "10px" }}>Team</th>
            <th style={{ padding: "10px" }}>Matches Played</th>
            <th style={{ padding: "10px" }}>Points</th>
            <th style={{ padding: "10px" }}>NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index} style={{ textAlign: "center" }}>
              <td>{team.Team|| "N/A"}</td>
              <td>{team.Matches|| "N/A"}</td>
              <td>{team.Points || "N/A"}</td>
              <td>{team.NRR|| "N/A"}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
