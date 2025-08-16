export function App() {
  return (
    <div>
      <h1>Workout Plan</h1>
      <Gallery />
    </div>
  );
}

export function Gallery() {
  return (
    <section>
      <h1>Anime Workout Motivation</h1>
      <Profile
        fullname="Son Goku"
        image="https://i.pinimg.com/736x/9c/c5/b9/9cc5b9440b46dbda663a2487c84d0f0d.jpg"
      />
      <Profile
        fullname="Saitama"
        image="https://i.pinimg.com/736x/33/aa/d8/33aad8ac8fc010cd94b0253963505af5.jpg"
      />
      <Profile
        fullname="Baki Hanma"
        image="https://i.pinimg.com/736x/1e/df/fd/1edffd083a98fb70bbde6a2109d539b0.jpg"
      />
      <Profile
        fullname="kamado tanjiro"
        image="https://i.pinimg.com/736x/04/07/ec/0407ec63d788a16c2f6357138a893021.jpg"
      />
    </section>
  );
}

export function Profile({
  fullname,
  image,
}: {
  fullname: string;
  image: string;
}) {
  return (
    <div className="bg-green-200 text-green-900">
      <h3 className="text-lg font-bold">{fullname}</h3>
      <img src={image} alt={fullname} height={150} width={100} />
    </div>
  );
}
