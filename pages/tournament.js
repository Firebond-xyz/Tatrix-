import React, { useEffect } from "react";
import Header from "../components/Header";

// import convertdata

async function render() {
  try {
    const response = await fetch("/api/db");
    console.log("response found!");
    const data = await response.json();
    console.log(data);

    // const convertedData = convertData(data);
    if (response) {
      window.bracketsViewer.render({
        stages: data.stage,
        matches: data.match,
        matchGames: data.match_game,
        participants: data.participant,
      });
    }
  } catch (error) {
    alert(
      "Failed to fetch data from localhost. Please make sure the server is running."
    );
    console.error(error);
  }
}

const Tournament = () => {
  useEffect(() => {
    render();
  }, []);

  return (
    <div>
      <Header />
      <div className="brackets-viewer"></div>
    </div>
  );
};

export default Tournament;
