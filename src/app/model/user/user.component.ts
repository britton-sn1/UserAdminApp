import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})

export class UserComponent implements OnInit {
    username: string;
    id: number;

    constructor() { }

    ngOnInit() {
    }

}
