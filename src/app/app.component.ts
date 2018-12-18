import { NgModule, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserComponent } from './model/user/user.component';
import { UserService } from './user.service';

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

    users: UserComponent[];

    title = 'UserAdminApp';

    constructor(private userService: UserService) { }

    getUsers() {
        console.warn('getting users');

        return this.userService.getUsers(); // .subscribe((urs: UserComponent[]) => this.users = urs);
    }
}
