/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), "package.json");

  return new Promise((resolve) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        return resolve(NextResponse.json({ error: "Failed to read package.json" }, { status: 500 }));
      }

      try {
        const jsonData = JSON.parse(data); 
        const version = jsonData.version;

        if (!version) {
          return resolve(NextResponse.json({ error: "Version not found" }, { status: 404 }));
        }

        return resolve(NextResponse.json(version, { status: 200 }));
      } catch (parseError) {
        return resolve(NextResponse.json({ error: "Error parsing package.json" }, { status: 500 }));
      }
    });
  });
}
