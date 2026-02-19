import { copyFile, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const README_FILE_NAME = 'README.md';
const PACKAGE_MANIFEST_FILE_NAME = 'package.json';
const LICENSE_FILE_NAME = 'LICENSE';

const PACKAGE_README_PATH = join(process.cwd(), `./src/${README_FILE_NAME}`);
const PACKAGE_MANIFEST_PATH = join(process.cwd(), `./${PACKAGE_MANIFEST_FILE_NAME}`);
const LICENSE_PATH = join(process.cwd(), `./${LICENSE_FILE_NAME}`);

const DIST_README_PATH = join(process.cwd(), `dist/shared-utils/${README_FILE_NAME}`);
const DIST_PACKAGE_MANIFEST_PATH = join(process.cwd(), `dist/shared-utils/${PACKAGE_MANIFEST_FILE_NAME}`);
const DIST_LICENCE_PATH = join(process.cwd(), `dist/shared-utils/${LICENSE_FILE_NAME}`);

async function main() {
    const packageManifestContents = await readFile(PACKAGE_MANIFEST_PATH, { encoding: 'utf8' });
    const packageManifest = JSON.parse(packageManifestContents);

    delete packageManifest.packageManager;
    delete packageManifest.engines.pnpm;
    delete packageManifest.scripts;
    delete packageManifest.devDependencies;

    await writeFile(DIST_PACKAGE_MANIFEST_PATH, JSON.stringify(packageManifest, null, 2), { encoding: 'utf8' });
    await copyFile(PACKAGE_README_PATH, DIST_README_PATH);
    await copyFile(LICENSE_PATH, DIST_LICENCE_PATH);
}

main().catch((error) => {
    console.error(`✗ PrepublishOnly failed: ${error.message}`);
    process.exit(1);
});
