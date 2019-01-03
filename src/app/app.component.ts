import { NgModule, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';


@NgModule({
    imports: [
        BrowserModule,
        // import HttpClientModule after BrowserModule.
        HttpClientModule,
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent]
})

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'UserAdminApp';

    constructor() {
    }

}
