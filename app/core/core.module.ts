import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';

import {ComposeMessageComponent} from './compose-message.component';
import {PageNotFoundComponent}   from './not-found.component';

import {DialogService}           from './dialog.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        ComposeMessageComponent,
        PageNotFoundComponent
    ],
    providers: [
        DialogService
    ]
})
export class CoreModule {
}