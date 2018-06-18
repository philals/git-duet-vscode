import * as spawnCommand from 'shelljs';

export async function spawn(command: string): Promise<string> {
   return new Promise<string>(function (resolve, reject) {

      let child = spawnCommand.exec(command);
      return resolve(child.stdout);
   });
}

