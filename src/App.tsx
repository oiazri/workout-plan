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
    <div>
      <h3>{fullname}</h3>
      <img src={image} alt={fullname} height={150} width={100} />
    </div>
  );
}
