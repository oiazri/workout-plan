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
        isHuman={false}
      />
      <Profile
        fullname="Saitama"
        image="https://i.pinimg.com/736x/33/aa/d8/33aad8ac8fc010cd94b0253963505af5.jpg"
        isHuman={true}
      />
      <Profile
        fullname="Baki Hanma"
        image="https://i.pinimg.com/736x/1e/df/fd/1edffd083a98fb70bbde6a2109d539b0.jpg"
        isHuman={true}
      />
      <Profile
        fullname="kamado tanjiro"
        image="https://i.pinimg.com/736x/04/07/ec/0407ec63d788a16c2f6357138a893021.jpg"
        isHuman={true}
      />
    </section>
  );
}

export function Profile({
  fullname,
  image,
  isHuman,
}: {
  fullname: string;
  image: string;
  isHuman: boolean;
}) {
  return (
    <div className="bg-orange-100">
      <h3>
        {fullname} is {isHuman ? "HUMAN" : "NOT HUMAN"}
      </h3>
      <img src={image} alt={fullname} height={150} width={100} />
    </div>
  );
}
