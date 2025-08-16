export function App() {
  return (
    <div className="m-10">
      <h1>Workout Plan</h1>
      <Gallery />
    </div>
  );
}

type Character = {
  id: number;
  fullname: string;
  imageUrl: string;
  description: string;
  exercises: string[];
};

const characters: Character[] = [
  {
    id: 1,
    fullname: "Son Goku",
    imageUrl:
      "https://i.pinimg.com/736x/9c/c5/b9/9cc5b9440b46dbda663a2487c84d0f0d.jpg",
    description: "Saiyan who saves earth",
    exercises: ["Deadlift", "Squat", "Bench press"],
  },
  {
    id: 2,
    fullname: "Vegeta",
    imageUrl:
      "https://i.pinimg.com/736x/86/c9/74/86c974bef067586b93b1ad3fa5a638bf.jpg",
    description: "Prince of all saiyan",
    exercises: ["Bench press", "Pull up", "Cable", "Pull down"],
  },
  {
    id: 3,
    fullname: "Saitama",
    imageUrl:
      "https://i.pinimg.com/736x/33/aa/d8/33aad8ac8fc010cd94b0253963505af5.jpg",
    description: "Break his limiter",
    exercises: ["100 push-ups", "100 sit-ups", "100 squats", "10km run"],
  },
  {
    id: 4,
    fullname: "Baki Hanma",
    imageUrl:
      "https://i.pinimg.com/736x/1e/df/fd/1edffd083a98fb70bbde6a2109d539b0.jpg",
    description: "Want to surpass his father",
    exercises: ["Shadow punch", "Jumping jack", "Push up"],
  },
  {
    id: 5,
    fullname: "Kamado Tanjiro",
    imageUrl:
      "https://i.pinimg.com/736x/04/07/ec/0407ec63d788a16c2f6357138a893021.jpg",
    description: "Want to destroy all demons",
    exercises: [
      "Train breathing techniques",
      "Dorong batu",
      "Meditasi di air terjun",
      "Latihan insting",
    ],
  },
];

export function Gallery() {
  return (
    <section>
      <h1>Anime Workout Motivation</h1>
      <ul className="space-y-4">
        {characters.map((character) => (
          <li key={character.id}>
            <Profile character={character} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Profile({ character }: { character: Character }) {
  return (
    <div className="flex gap-4 p-4 bg-green-200 text-green-900">
      <div>
        <h3 className="text-lg font-bold">{character.fullname}</h3>
        <img
          src={character.imageUrl}
          alt={character.fullname}
          height={150}
          width={100}
        />
      </div>

      <div>
        <p>{character.description}</p>
      </div>
    </div>
  );
}
