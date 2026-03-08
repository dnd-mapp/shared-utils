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

/**
 * @param manifestContents {string}
 * @return {Record<string, unknown>}
 */
function parsePackageManifest(manifestContents) {
    return JSON.parse(manifestContents);
}

async function main() {
    const packageManifestContents = await readFile(PACKAGE_MANIFEST_PATH, { encoding: 'utf8' });
    const packageManifest = parsePackageManifest(packageManifestContents);

    delete packageManifest.packageManager;
    delete packageManifest.engines.pnpm;
    delete packageManifest.scripts;
    delete packageManifest.devDependencies;

    packageManifest.types = packageManifest.types.replace('dist/shared-utils/', '');
    packageManifest.module = packageManifest.module.replace('dist/shared-utils/', '');
    packageManifest.main = packageManifest.main.replace('dist/shared-utils/', '');

    packageManifest.exports['.'].types = packageManifest.exports['.'].types.replace('dist/shared-utils/', '');
    packageManifest.exports['.'].import = packageManifest.exports['.'].import.replace('dist/shared-utils/', '');
    packageManifest.exports['.'].require = packageManifest.exports['.'].require.replace('dist/shared-utils/', '');

    await writeFile(DIST_PACKAGE_MANIFEST_PATH, JSON.stringify(packageManifest, null, 2), { encoding: 'utf8' });
    await copyFile(PACKAGE_README_PATH, DIST_README_PATH);
    await copyFile(LICENSE_PATH, DIST_LICENCE_PATH);
}

try {
    await main();
} catch (error) {
    console.error(`✗ PrepublishOnly failed: ${error.message}`);
    process.exit(1);
}
