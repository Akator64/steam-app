import Image from 'next/image';

export default function Card(props) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          className="block h-auto w-full"
          src={props.imageUrl}
          alt={props.title}
          width="600"
          height="400"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Voir détails</button>
        </div>
      </div>
    </div>
  );
}
