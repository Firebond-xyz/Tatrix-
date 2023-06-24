const { JsonDatabase } = require('brackets-json-db');
const { BracketsManager } = require('brackets-manager');

const storage = new JsonDatabase();
const manager = new BracketsManager(storage);

export default async function handler(req, res) {
  try {
    // Create an elimination stage for tournament `3`.
    await manager.create({
      tournamentId: 3,
      name: 'Elimination stage',
      type: 'double_elimination',
      seeding: ['Team shikhar', 'Team aditya', 'Team Ganesh', 'DIxit'],
      settings: { grandFinal: 'double' },
    });
    
    await manager.create({
      tournamentId: 4, // 
      name: 'ROund RObin',
      type: 'single_elimination',
      seeding: [
          'Team 1',
          'Team 2',
          'Team 3',
          'Team 4',
          'Team 5',
          'Team 6',
          'Team 7',
          'Team 8',
      ],
    settings: { grandFinal: 'double' },
    });
    // await manager.update.match({
      //   id: 0, // First match of winner bracket (round 1)
    //   opponent1: { score: 16, result: 'win' },
    //   opponent2: { score: 12 },
    // });
    
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

  

    res.status(200).json({ message: 'Data updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}
