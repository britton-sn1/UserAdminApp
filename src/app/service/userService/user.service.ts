import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserComponent } from '../../model/user/user.component';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    userServiceEndpoing = 'http://localhost:8980/UserAdminAppServer/UserAdminService';

    constructor(
        private http: HttpClient
    ) { }

    getUsers(): Observable<UserComponent[]> {
        return this.http.get<UserComponent[]>(this.userServiceEndpoing);
    }

    delUser(user: UserComponent): Observable<UserComponent[]> {
        console.warn('deleting user ' + user.username);
        return this.http.get<UserComponent[]>(
            this.userServiceEndpoing + '?id=' + user.id);
    }


    reset() {
        console.warn('reseting app');
        return this.http.get<UserComponent[]>(
            this.userServiceEndpoing + '?reset=true');

    }
}
