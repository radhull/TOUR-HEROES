import { Hero } from './hero';

export const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice', state: 'active' },
      { id: 12, name: 'Narco', state: 'active' },
      { id: 13, name: 'Bombasto', state: 'active' },
      { id: 14, name: 'Celeritas', state: 'active' },
      { id: 15, name: 'Magneta', state: 'active' },
      { id: 16, name: 'RubberMan', state: 'active' },
      { id: 17, name: 'Dynama', state: 'active' },
      { id: 18, name: 'Dr IQ', state: 'active' },
      { id: 19, name: 'Magma', state: 'active' },
      { id: 20, name: 'Tornado', state: 'active' }
].map(x => new Hero(x.id, x.name, x.state));

