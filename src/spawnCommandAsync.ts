import * as spawnCommand from 'shelljs';

export async function spawn(command: string): Promise<string> {
   return new Promise<string>(function (resolve, reject) {

      let child = spawnCommand.exec(command);
      return resolve(child.stdout);

      // child.stdout.on('data', function (data: string) {
      //    return resolve(data.toString());
      // });

      // child.on('exit', function (exitCode: string) {
      //    return reject(exitCode);
      // });
   });
}

