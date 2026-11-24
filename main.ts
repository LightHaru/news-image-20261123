import { copyFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const artwork = fileURLToPath(new URL("entry.png", import.meta.url));

async function writeEdition(outputDirectory: string): Promise<void> {
  const destination = resolve(outputDirectory, "entry.png");
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(artwork, destination);
}

await writeEdition(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
