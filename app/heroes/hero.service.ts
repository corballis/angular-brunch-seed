import {Injectable} from '@angular/core';

export class Hero {
    constructor(public id: number, public name: string) {
    }
}

let HEROES: Hero[] = [
    new Hero(11, 'Mr. Nice'),
    new Hero(12, 'Narco'),
    new Hero(13, 'Bombasto'),
    new Hero(14, 'Celeritas'),
    new Hero(15, 'Magneta'),
    new Hero(16, 'RubberMan')
];

let heroesPromise: Promise<Hero[]> = Promise.resolve(HEROES);

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return heroesPromise;
    }

    getHero(id: number | string): Promise<Hero> {
        return heroesPromise
            .then((heroes: Hero[]) => heroes.find((hero: Hero) => hero.id === +id));
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */