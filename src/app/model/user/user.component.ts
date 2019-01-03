import { Component, OnInit, NgModule, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/userService/user.service';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: []
})

export class UserComponent implements OnInit {

    // @Input()
    user: UserComponent;

    username: string;
    id: number;
    email: string;
    firstName: string;
    lastName: string;

    constructor(private route: ActivatedRoute,
        private userService: UserService,
        private location: Location) { }


    ngOnInit() {
        this.getUser();
    }

    getUser(): void {
        const id =  this.route.snapshot.paramMap.get('id');
        this.userService.getUser(id).subscribe(user => this.updateUser(user));
    }

    goBack(): void {
        this.location.back();
    }

    updateUser(user: UserComponent) {
        this.user = user;
    }
}
