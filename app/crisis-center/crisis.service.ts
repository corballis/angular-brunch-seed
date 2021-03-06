export class Crisis {
    constructor(public id: number, public name: string) {
    }
}

const CRISES: Crisis[] = [
    new Crisis(1, 'Dragon Burning Cities'),
    new Crisis(2, 'Sky Rains Great White Sharks'),
    new Crisis(3, 'Giant Asteroid Heading For Earth'),
    new Crisis(4, 'Procrastinators Meeting Delayed Again')
];

let crisesPromise: Promise<Crisis[]> = Promise.resolve(CRISES);

import {Injectable} from '@angular/core';

@Injectable()
export class CrisisService {

    static nextCrisisId = 100;

    getCrises() {
        return crisesPromise;
    }

    getCrisis(id: number | string) {
        return crisesPromise
            .then((crises: Crisis[]) => crises.find((crisis: Crisis) => crisis.id === +id));
    }


    addCrisis(name: string) {
        name = name.trim();
        if (name) {
            let crisis = new Crisis(CrisisService.nextCrisisId++, name);
            crisesPromise.then((crises: Array<Crisis>) => crises.push(crisis));
        }
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */