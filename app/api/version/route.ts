/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server';
import fs from 'fs/promises'; // Utiliser fs/promises pour des appels asynchrones
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), "package.json");

  try {
    const data = await fs.readFile(filePath, "utf8"); // Lecture asynchrone du fichier
    const jsonData = JSON.parse(data); // Analyser le contenu JSON
    const version = jsonData.version; // Extrait la version

    // Vérifie si la version existe
    if (!version) {
      return NextResponse.json({ error: "Version not found" }, { status: 404 });
    }

    // Renvoie la version en tant que chaîne de caractères
    return NextResponse.json(version, { status: 200 });
  } catch (err) {
    // Gère les erreurs de lecture ou d'analyse
    return NextResponse.json({ error: "Failed to read or parse package.json" }, { status: 500 });
  }
}
