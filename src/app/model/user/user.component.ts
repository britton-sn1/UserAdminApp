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

    @Input()
    userId: number;

    username: string;
    id: number;

    constructor(private route: ActivatedRoute,
        private userService: UserService,
        private location: Location) { }


    ngOnInit() {
    }

    goBack(): void {
        this.location.back();
    }
}
