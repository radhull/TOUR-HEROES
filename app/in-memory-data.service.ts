import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes: Hero[] = HEROES;
    return { heroes };
  }


}
