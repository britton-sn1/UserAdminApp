import { NgModule, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserComponent } from './model/user/user.component';
import { UserService } from './user.service';
import { timer } from 'rxjs';


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

    public users: UserComponent[];



    title = 'UserAdminApp';

    constructor(private userService: UserService) {
        const tmr = timer(0, 2000);
        tmr.subscribe(t => this.getUsers());
    }

    ngInit() {
    }

    getUsers() {
        console.warn('getting users');

        return this.userService.getUsers().subscribe(usrs => this.users = usrs);
    }
}
