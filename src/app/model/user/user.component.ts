import { Component, OnInit, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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

    @Input() user: UserComponent;

    username: string;
    id: number;

    constructor() { }

    ngOnInit() {
    }

}
