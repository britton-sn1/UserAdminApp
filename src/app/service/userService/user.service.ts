import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserComponent } from '../../model/user/user.component';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    userServiceEndpoint = 'http://localhost:8980/UserAdminAppServer/UserAdminService';

    constructor(
        private http: HttpClient
    ) { }

    getUsers(): Observable<UserComponent[]> {
        return this.http.get<UserComponent[]>(this.userServiceEndpoint);
    }

    delUser(user: UserComponent): Observable<UserComponent[]> {
        console.warn('deleting user ' + user.username);
        return this.http.get<UserComponent[]>(
            this.userServiceEndpoint + '?id=' + user.id);
    }


    reset() {
        console.warn('reseting app');
        return this.http.get<UserComponent[]>(
            this.userServiceEndpoint + '?reset=true');

    }

    addNewUser(newUser: string) {
        return this.http.get<UserComponent[]>(this.userServiceEndpoint + '?add=' + newUser);
    }
}
