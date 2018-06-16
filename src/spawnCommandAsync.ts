import * as spawnCommand from 'spawn-command';

export async function spawn(command: string): Promise<string> {
   return new Promise<string>(function (resolve, reject) {

      let child = spawnCommand(command);

      child.stdout.on('data', function (data: string) {
         return resolve(data.toString());
      });

      child.on('exit', function (exitCode: string) {
         return reject(exitCode);
      });
   });
}

