import { promises as fs} from 'fs';
import path from 'path';

const source = './res';
const destination = './docs';

(async () => {
    const files = await fs.readdir(source);
    let copiedFiles = 0;
    for (const file of files) {
        const sourcePath = path.join(source, file);
        const destPath = path.join(destination, file);
        const lstats = await fs.lstat(sourcePath);

        if (lstats.isFile()) {
            await fs.copyFile(sourcePath, destPath);
            copiedFiles += 1;
        }
    }
    console.log(`Copied files: ${copiedFiles}`);


})().catch(e => {
    console.error(e);
    process.exit(-1);
})

