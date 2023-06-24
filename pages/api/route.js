const { JsonDatabase } = require("brackets-json-db");
const { BracketsManager } = require("brackets-manager");

const storage = new JsonDatabase();
const manager = new BracketsManager(storage);

export default async function handler(req, res) {
  try {
    // const { tournamentName, gameName, type, numberOfTeams, teamNames } =
    //   req.body;
    const { opp1Data, opp2Data,gameIdForServer } = req.body;
    // Create an elimination stage for tournament `3`.
    // await manager.create({
    //   tournamentId: 3,
    //   name: tournamentName,
    //   type: type,
    //   seeding: teamNames.split(',').map((name) => name.trim()),
    //   settings: { grandFinal: 'double' },
    // });
    const r1 = opp1Data > opp2Data ? "win" : "loss";
    const r2 = opp2Data > opp1Data ? "win" : "loss";

    await manager.update.match({
      id: 1, // First match of winner bracket (round 1)
      opponent1: { score: opp1Data, result: r1 },
      opponent2: { score: opp2Data, result: r2 },
    });

    // await manager.update.match({
    //   id:1,
    //   opponent1: { score: 13, result: 'win' },
    //   opponent2: { score: 11 },
    // })

    // await manager.update.match({
    //     id:6,
    //     opponent1: { score: 111, result: 'win' },
    //     opponent2: { score: 1 },
    //   })

    res.status(200).json({ message: "Data updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
}
