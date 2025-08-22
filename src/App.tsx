export function App() {
  return (
    <div>
      <h1 className="font-bold text-yellow-300">Workout Plan</h1>
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
    description:
      "rain beyond limits, but always with purpose. Each battle makes you stronger.",
    exercises: ["Deadlift", "Squats", "Bench press", "Barbell row"],
  },
  {
    id: 2,
    fullname: "Vegeta",
    imageUrl:
      "https://i.pinimg.com/736x/0f/15/49/0f15491beeb061f90c67bab4ea6b3955.jpg",
    description: "Every day, you must surpass your past self.",
    exercises: [
      "Upper body",
      "Lower body",
      "HIIT",
      "Strength & Combat Conditioning",
    ],
  },
  {
    id: 3,
    fullname: "Saitama",
    imageUrl:
      "https://i.pinimg.com/736x/33/aa/d8/33aad8ac8fc010cd94b0253963505af5.jpg",
    description: "No shortcuts. Just do it every day, rain or shine.",
    exercises: ["100 push-ups", "100 sit-ups", "100 squats", "10km run"],
  },
  {
    id: 4,
    fullname: "Baki Hanma",
    imageUrl:
      "https://i.pinimg.com/736x/1e/df/fd/1edffd083a98fb70bbde6a2109d539b0.jpg",
    description: "A strong body is nothing without willpower and adaptability.",
    exercises: [
      "One-arm-push-up",
      "Pistol squats",
      "Hanging leg raises",
      "Shadow punch",
    ],
  },
  {
    id: 5,
    fullname: "Kamado Tanjiro",
    imageUrl:
      "https://i.pinimg.com/736x/04/07/ec/0407ec63d788a16c2f6357138a893021.jpg",
    description:
      "Control your breath, control your spirit. Strength flows from calm focus.",
    exercises: ["Pulls-up", "Push-up", "Weighted Lunges", " Box Breathing"],
  },
  {
    id: 6,
    fullname: "Roronoa Zorro",
    imageUrl:
      "https://i.pinimg.com/1200x/66/10/64/661064a450e86c919f3bd7bb5f64545a.jpg",
    description:
      "Scars are proof you kept fighting. Train with discipline, cut down your weakness, and become stronger than yesterday.",
    exercises: ["Dumbbell shoulder", "Plank", "Push-up", "Sprint"],
  },
];

export function Gallery() {
  return (
    <section>
      <h1 className="text-yellow-300">Anime Character Workout Motivation</h1>

      <ul className="grid grid-cols-3 gap-4">
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
    <div className="m-3 min-h-56 rounded flex gap-4 p-4 bg-yellow-300 text-black">
      <div>
        <img
          className="rounded"
          src={character.imageUrl}
          alt={character.fullname}
          height={150}
          width={100}
        />
      </div>

      <div>
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
