import { spawn } from "./spawnCommandAsync";

export async function getDuetPair() {
   let allLines = await spawn('git duet');

   let firstLine = allLines.split('\n')[0];
   let thirdLine = allLines.split('\n')[2];
   let firstName = firstLine.split('=')[1].replace(`'`, '').replace(`'`, '');
   let secondName = thirdLine.split('=')[1].replace(`'`, '').replace(`'`, '');

   return { firstName, secondName };
}

export async function getDuetSolo() {
   let allLines = await spawn('git duet');

   let firstLine = allLines.split('\n')[0];
   let firstName = firstLine.split('=')[1].replace(`'`, '').replace(`'`, '');

   return { firstName };
}