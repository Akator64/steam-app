import Card from './card';

export default function CardList(props) {
  return (
    <div className="flex flex-wrap -mx-1 lg:-mx-4">
      {props.cards.map((card) => {
        return (
          <div
            key={card.title}
            className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
          >
            <Card title={card.title} imageUrl={card.imageUrl} />
          </div>
        );
      })}
    </div>
  );
}
