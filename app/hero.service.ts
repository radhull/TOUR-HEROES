import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        // Simular latencia del servidor con 2 segundos de retraso
        return new Promise(resolve => {
                                setTimeout(() => resolve(this.getHeroes()), 2000);
                                }
                            );
    }

    getHero(id: number): Promise<Hero> {
        // return Promise.resolve(HEROES.find(hero => hero.id === id));
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }

}
