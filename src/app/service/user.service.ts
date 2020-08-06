/** Permite que el servicio pueda ser usado en otra parte de angular */
import { Injectable, ɵINJECTOR_IMPL__POST_R3__ } from '@angular/core';

/** Permite comunicarse por medio del metodo HTTP con otra aplicacion */
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class UserService{
    apiURL = 'http://localhost:3000/api';
    opt = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    constructor(
      private http: HttpClient
  ){}

registerUser(userParams){
    const params = JSON.stringify(userParams);
    return this.http.post(
        this.apiURL,
        params,
        this.opt
    ).pipe( res => res );
}

getAllUsers(){
    return this.http.get(
        this.apiURL + '/allUser',
        this.opt
        )
    }

updateUser(userParams){
    const params = JSON.stringify(userParams);
    return this.http.put(
        `${this.apiURL}/${userParams._id}`,
        params,
        this.opt
        )
    }

getUser(userId){
    return this.http.get(
        `${this.apiURL}/getUser/${userId}`,
        this.opt
        )
    }

    removeUser(userId){
        return this.http.delete(
            `${this.apiURL}/${userId}`,
            this.opt
        )
    }

}

    

