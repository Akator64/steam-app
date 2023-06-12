export default function Card() {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="{imageUrl}" alt="{name}" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Voir détails</button>
        </div>
      </div>
    </div>
  );
}
