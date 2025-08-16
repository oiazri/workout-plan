export function App() {
  return (
    <div>
      <h1>Workout Plan</h1>
      <Gallery />
    </div>
  );
}

const characters = [
  {
    id: 1,
    fullname: "Son Goku",
    imageUrl:
      "https://i.pinimg.com/736x/9c/c5/b9/9cc5b9440b46dbda663a2487c84d0f0d.jpg",
    description: "Saiyan who saves earth",
  },
  {
    id: 2,
    fullname: "Vegeta",
    imageUrl:
      "https://i.pinimg.com/736x/86/c9/74/86c974bef067586b93b1ad3fa5a638bf.jpg",
    description: "Prince of all saiyan",
  },
  {
    id: 3,
    fullname: "Saitama",
    imageUrl:
      "https://i.pinimg.com/736x/33/aa/d8/33aad8ac8fc010cd94b0253963505af5.jpg",
    description: "Break his limiter",
  },
  {
    id: 4,
    fullname: "Baki Hanma",
    imageUrl:
      "https://i.pinimg.com/736x/1e/df/fd/1edffd083a98fb70bbde6a2109d539b0.jpg",
    description: "Want to surpass his father",
  },
  {
    id: 5,
    fullname: "Kamado Tanjiro",
    imageUrl:
      "https://i.pinimg.com/736x/04/07/ec/0407ec63d788a16c2f6357138a893021.jpg",
    description: "Want to destroy all demons",
  },
];

export function Gallery() {
  return (
    <section>
      <h1>Anime Workout Motivation</h1>
      {characters.map((character) => (
        <li key={character.id}>
          <Profile
            fullname={character.fullname}
            imageUrl={character.imageUrl}
            description={character.description}
          />
        </li>
      ))}
    </section>
  );
}

export function Profile({
  fullname,
  imageUrl,
  description,
}: {
  fullname: string;
  imageUrl: string;
  description: string;
}) {
  return (
    <div className="bg-green-200 text-green-900">
      <h3 className="text-lg font-bold">{fullname}</h3>
      <img src={imageUrl} alt={fullname} height={150} width={100} />
      <p>{description}</p>
    </div>
  );
}
