import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    json(): any {
        throw new Error("Method not implemented.");
    }
    username: string;
    id: number;

    constructor() { }

    ngOnInit() {
    }

}
