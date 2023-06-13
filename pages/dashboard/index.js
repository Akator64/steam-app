import CardList from '../components/cardList';

const games = [
  { title: 'Jeu 1', imageUrl: 'https://picsum.photos/32/32/?random' },
  { title: 'Jeu 2', imageUrl: 'https://picsum.photos/32/32/?random' },
  { title: 'Jeu 3', imageUrl: 'https://picsum.photos/32/32/?random' },
  { title: 'Jeu 4', imageUrl: 'https://picsum.photos/32/32/?random' },
  { title: 'Jeu 5', imageUrl: 'https://picsum.photos/32/32/?random' },
  { title: 'Jeu 6', imageUrl: 'https://picsum.photos/32/32/?random' },
  { title: 'Jeu 7', imageUrl: 'https://picsum.photos/32/32/?random' },
];

export default function Dashboard() {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <CardList cards={games} />
    </div>
  );
}
