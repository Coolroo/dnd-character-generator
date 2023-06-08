import { CharacterSheet } from '@/types';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const characterSheet: CharacterSheet = JSON.parse(decodeURIComponent(searchParams.get('characterSheet') || '{}'));

  /* ... */

  return NextResponse.json({ message: 'Got Request!' });
}
