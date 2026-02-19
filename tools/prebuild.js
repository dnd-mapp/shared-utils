import { rm } from 'fs/promises';

const OUTPUT_PATH = 'dist/shared-utils';

async function main() {
    await rm(OUTPUT_PATH, { force: true, recursive: true });
}

main().catch((error) => {
    console.error(`✗ Failed to clear output folder: ${error.message}`);
});
