// import React, { useEffect } from "react";

// const Viewer = () => {
//   async function render() {
//     try {
//       const response = await fetch("/api/db");
//       console.log("response found!");
//       const data = await response.json();
//       console.log(data);

//       // const convertedData = convertData(data);
//       if (response) {
//         window.bracketsViewer.render({
//           stages: data.stage,
//           matches: data.match,
//           matchGames: data.match_game,
//           participants: data.participant,
//         });
//       }
//     } catch (error) {
//       alert(
//         "Failed to fetch data from localhost. Please make sure the server is running."
//       );
//       console.error(error);
//     }
//   }
//   useEffect(() => {
//     render();
//   }, []);
//   return <div className="brackets-viewer"></div>;
// };

// export default Viewer;

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Tournament from "../components/Tournament";

const Viewer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [gameId, setGameId] = useState(1);
  const [opp1Data, setOpp1Data] = useState(0);
  const [opp2Data, setOpp2Data] = useState(0);

  const router = useRouter();
  const { tname } = router.query;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/db");
        console.log("response found!");
        const data = await response.json();
        console.log(data);
        window.bracketsViewer.render({
          stages: data.stage,
          matches: data.match,
          matchGames: data.match_game,
          participants: data.participant,
        });
        // const convertedData = convertData(data);
        if (response.ok) {
          console.log("success");
        } else {
          console.log("Failed to fetch data:", response.statusText);
        }
      } catch (error) {
        alert(
          "Failed to fetch data from localhost. Please make sure the server is running."
        );
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleUpdate = async (event) => {
    event.preventDefault();
    console.log("data updating..");
    try {
      const gameIdForServer = gameId - 1;
      const response = await fetch("/api/route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          opp1Data,
          opp2Data,
          gameIdForServer,
        }),
      });

      if (response.ok) {
        // Handle successful response
        setGameId((preValue) => preValue + 1);
        console.log("Data sent successfully!");
      } else {
        // Handle error response
        console.log("Failed to send data!");
      }
    } catch (error) {
      // Handle network error
      console.error("Failed to send data:", error);
    }
  };

  const handleOpp1Data = (event) => {
    setOpp1Data(event.target.value);
  };

  const handleOpp2Data = (event) => {
    setOpp2Data(event.target.value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-center mt-10">
        <h1 className="text-4xl font-[700]">
          {tname ? tname : "Tournament Name"}
        </h1>
      </div>
      <div className="brackets-viewer flex justify-center items-center content-center h-[480px] w-[1000px] mt-10 p-2 mb-10"></div>
      <div className="flex flex-col">
        <h1 className="flex justify-center text-xl">Update Tournament Data</h1>
        <div className="flex flex-row items-center justify-center">
          Enter Data of Game {gameId} =
          <div className="flex flex-col ml-2 gap-2 p-2 items-center">
            <input
              type="number"
              placeholder="Opponent 1(Top)"
              className="rounded-[5px] p-1 pl-2"
              required
              onChange={handleOpp1Data}
            ></input>
            <input
              type="number"
              placeholder="Opponent 2(Above)"
              className="rounded-[5px] p-1 pl-2"
              required
              onChange={handleOpp2Data}
            ></input>
            <button
              className="bg-white text-black rounded-[5px] w-[80px] flex justify-center mt-3"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewer;
