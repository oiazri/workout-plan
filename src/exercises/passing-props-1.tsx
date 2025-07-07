// https://react.dev/learn/passing-props-to-a-component#challenges

export function getImageUrl(imageId: string, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}

export function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>

      <Profile fullname="Maria Skłodowska-Curie" imageId="szV5sdG" />

      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img className="avatar" src={getImageUrl("YfeOqp2")} alt="Katsuko Saruhashi" width={70} height={70} />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}

function Profile({ fullname, imageId }: { fullname: string; imageId: string }) {
  return (
    <section className="profile">
      <h2>{fullname}</h2>
      <img className="avatar" src={getImageUrl(imageId)} alt={fullname} width={70} height={70} />
      <ul>
        <li>
          <b>Profession: </b>
          physicist and chemist
        </li>
        <li>
          <b>Awards: 4 </b>
          (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
        </li>
        <li>
          <b>Discovered: </b>
          polonium (chemical element)
        </li>
      </ul>
    </section>
  );
}
