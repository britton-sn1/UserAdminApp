import { Component } from '@angular/core';
import { UserComponent } from './model/user/user.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    users: UserComponent[] = [{ username: 'admin', id: 201 },{ username: 'neil', id: 202 },{ username: 'eric', id: 203 }];

    title = 'UserAdminApp';
}
