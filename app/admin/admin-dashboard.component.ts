import {Component, OnInit}    from '@angular/core';
import {ActivatedRoute, Params}       from '@angular/router';
import {Observable}           from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Component({
    template: `
    <p>Dashboard</p>

    <p>Session ID: {{ sessionId | async }}</p>
    <a id="anchor"></a>
    <p>Token: {{ token | async }}</p>

    Preloaded Modules
    <ul>
      <li *ngFor="let module of modules">{{ module }}</li>
    </ul>
  `
})
export class AdminDashboardComponent implements OnInit {
    sessionId: Observable<string>;
    token: Observable<string>;
    modules: string[];

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        // Capture the session ID if available
        this.sessionId = this.route
            .queryParams
            .map((params: Params) => params['session_id'] || 'None');

        // Capture the fragment if available
        this.token = this.route
            .fragment
            .map((fragment: string) => fragment || 'None');
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */