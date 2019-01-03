import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { UserService } from '../../service/userService/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


    public users: UserComponent[];


    constructor(private userService: UserService) {
        //        const tmr = timer(0, 15000); // start delay, interval ms
        //        tmr.subscribe(t => this.getUsers());
        this.getUsers();

    }

    ngOnInit() {
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
