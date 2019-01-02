import { NgModule, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserComponent } from './model/user/user.component';
import { UserService } from './service/userService/user.service';
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
//        const tmr = timer(0, 15000); // start delay, interval ms
//        tmr.subscribe(t => this.getUsers());
        this.getUsers();
    }

    getUsers() {
        console.warn('getting users');

        return this.userService.getUsers().subscribe(usrs => this.users = usrs);
    }

    public delUser(user: UserComponent) {
        this.userService.delUser(user).subscribe(usrs => this.users = usrs);
    }

    public reset() {
        this.userService.reset().subscribe(usrs => this.users = usrs);
    }

    public addNewUser(userName) {
        this.userService.addNewUser(userName).subscribe(usrs => this.users = usrs);
    }
}
