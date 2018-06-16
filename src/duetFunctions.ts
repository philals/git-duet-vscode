import { spawn } from "./spawnCommandAsync";

export async function printNames(showInformationMessage: any) {
   let res = await spawn('git duet');
   let allLines = res.split('\n');

   if (allLines[0].split('=')[1] === allLines[2].split('=')[1]) {
      let firstLine = allLines[0];
      let firstName = firstLine.split('=')[1].replace(`'`, '').replace(`'`, '');

      showInformationMessage("git solo: " + firstName);

   } else {
      let firstLine = allLines[0];
      let thirdLine = allLines[2];
      let firstName = firstLine.split('=')[1].replace(`'`, '').replace(`'`, '');
      let secondName = thirdLine.split('=')[1].replace(`'`, '').replace(`'`, '');

      showInformationMessage(`git duet: ${firstName} + ${secondName}`);
   }
}