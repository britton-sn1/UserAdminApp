import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserComponent } from './model/user/user.component';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient
    ) { }

    getUsers(): Observable<UserComponent []> {
        return  this.http.get<UserComponent[]>(
            'http://localhost:8980/UserAdminAppServer/UserAdminService');
    }
}
