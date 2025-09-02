import { characters, type Character } from "./modules/data.ts";

export function App() {
  return (
    <div className="p-4">
      <header className="text-yellow-300 flex flex-col items-center p-4">
        <h1 className="font-bold text-2xl">Workout Plan</h1>
        <h2 className="text-xl">Anime Character Workout Motivation</h2>
      </header>

      <CharacterGrid />
    </div>
  );
}

export function CharacterGrid() {
  return (
    <section>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {characters.map((character: Character) => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="min-h-56 rounded grid grid-cols-3 gap-4 p-4 bg-yellow-300 text-black">
      <div>
        <img
          className="rounded"
          src={character.imageUrl}
          alt={character.fullname}
          height={150}
          width={100}
        />
      </div>

      <div className="col-span-2 pl-4">
        <h3 className="text-lg font-bold">{character.fullname}</h3>
        <p className="italic">{character.description}</p>
        <ul className="list-disc list-inside">
          {character.exercises.map((exercise) => (
            <li key={exercise}>{exercise}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
