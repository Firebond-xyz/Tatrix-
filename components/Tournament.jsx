import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Tournament = () => {
  const [tournamentName, setTournamentName] = useState("");
  const [gameName, setGameName] = useState("");
  const [type, setType] = useState("");
  const [numberOfTeams, setNumberOfTeams] = useState("");
  const [teamNames, setTeamNames] = useState("");
  const router = useRouter();

  const tournamentNameHandler = (event) => {
    setTournamentName(event.target.value);
  };
  const gameNameHandler = (event) => {
    setGameName(event.target.value);
  };
  const typeHandler = (event) => {
    setType(event.target.value);
  };

  const numberOfTeamsHandler = (event) => {
    setNumberOfTeams(event.target.value);
  };

  const teamNamesHandler = (event) => {
    setTeamNames(event.target.value);
  };

  function generateRandomTwoDigitNumber() {
    return Math.floor(Math.random() * 90) + 10;
  }

  const onFormSubmit = async (event) => {
    event.preventDefault();
    console.log("form submit..");
    try {
      const randomNum = generateRandomTwoDigitNumber();
      localStorage.setItem("TournId", randomNum);
      if (type == "undefined") return alert("type not set!");
      console.log(
        tournamentName,
        gameName,
        type,
        numberOfTeams,
        teamNames,
        randomNum
      );
      localStorage.setItem("gameId", 0);
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tournamentName,
          gameName,
          type,
          numberOfTeams,
          teamNames,
          randomNum,
        }),
      });

      if (response.ok) {
        // Handle successful response
        console.log("Data sent successfully!");
      } else {
        // Handle error response
        console.log("Failed to send data!");
      }

      const propsToSend = {
        tname: tournamentName,
      };

      router.push({
        pathname: "/viewer",
        query: propsToSend,
      });
    } catch (error) {
      // Handle network error
      console.error("Failed to send data:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full pt-5 max-w-lg">
          <h1 className="font-[700] text-2xl text-white flex flex-row justify-center">
            Tournament Generator
          </h1>
          <span className="flex justify-center">
            Create your tournament brackets here..
          </span>

          <form onSubmit={onFormSubmit}>
            <div className=" flex flex-col text-left mb-6 mt-6">
              <label
                htmlFor="text"
                className=" mb-2 text-lg font-medium text-white dark:text-white"
              >
                Enter Tournament Name
              </label>
              <input
                type="text"
                id="input-name"
                onChange={tournamentNameHandler}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Road to victory, fight till last breath,.."
                required
              />
            </div>
            <div className=" flex flex-col text-left mb-6 mt-6">
              <label
                htmlFor="text"
                className=" mb-2 text-lg font-medium text-white dark:text-white"
              >
                Enter Game Name
              </label>
              <input
                type="text"
                id="input-name"
                onChange={gameNameHandler}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Valorant"
                required
              />
            </div>
            <div className=" flex flex-col text-left mb-6 mt-6">
              <label
                htmlFor="text"
                className=" mb-2 text-lg font-medium text-white dark:text-white"
              >
                Enter Tournament Type
              </label>
              <select
                onChange={typeHandler}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              >
                <option value="undefined" selected>
                  --Select Type--
                </option>
                <option value="single_elimination">Single Elimination</option>
                <option value="double_elimination">Double Elimination</option>
                <option value="round_robin">Round Robin</option>
              </select>
              {/* <input
                type="text"
                id="input-name"
                onChange={typeHandler}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Single Elimination, Double Elimination, Round Robin"
                required
              /> */}
            </div>
            <div className=" flex flex-col text-left mb-6">
              <label
                htmlFor="text"
                className=" mb-2 text-lg font-medium text-white dark:text-white"
              >
                Enter Number Of Teams
              </label>
              <input
                type="number"
                id="input-name"
                onChange={numberOfTeamsHandler}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Total Number Of Teams"
                required
              />
            </div>
            <div className=" flex flex-col text-left mb-6">
              <label
                htmlFor="text"
                className=" mb-2 text-lg font-medium text-white dark:text-white"
              >
                Enter Name Of Teams
              </label>
              <input
                type="text"
                id="input-name"
                onChange={teamNamesHandler}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Team Vitalik, Team Satoshi.."
                required
              />
            </div>
            <div className="flex flex-row justify-center ">
              <button className="inline-flex items-center p-5 mt-4 mb-5 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Create Brackets
                <BsFillArrowRightCircleFill className="ml-3" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tournament;
