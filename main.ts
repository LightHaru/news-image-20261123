import { mkdir, copyFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const destination = join(outputDir, "entry.png");

await mkdir(dirname(destination), { recursive: true });
await copyFile(new URL("./entry.png", import.meta.url), destination);
