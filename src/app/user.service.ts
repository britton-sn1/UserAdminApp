import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient
    ) { }

    getUsers() {
        return [{ username: 'eric', id: 702 },
        { username: 'bert', id: 292 }];

        // this.http.get('http://localhost:8080/UserAdminAppServer/UserAdminService');

    }
}
