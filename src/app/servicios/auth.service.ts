
import { Injectable } from '@angular/core';


import { Angular2TokenService } from 'angular2-token';
import { environment } from '../../environments/environment';


import { User } from '../Models/User';
import { Subject, Observable } from 'rxjs';


import { Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSignedIn$: Subject<boolean> = new Subject();
  private respuesta: any;
  logueado: boolean;
  constructor(
    private authToken: Angular2TokenService
  ) {
    this.authToken.init(environment.token_auth_config);
    this.authToken.validateToken().subscribe(
      res => res.status === 200 ? this.userSignedIn$.next(res.json().success) : this.userSignedIn$.next(false)
    )
  }


  logIn(user: User) {

    this.authToken.signIn({
      email: user.email,
      password: user.password
    }).subscribe(
      res => {
        this.userSignedIn$.next(true);
        this.respuesta = res;
        this.logueado = true;
        console.log(this.respuesta.status);
      }

    );
    return this.logueado;
    /*

   this.authToken.signIn({
      email: user.email,
      password: user.password
    }).subscribe(
      res => {
        console.log('esta es la res data');
        console.log(res);
        this.userSignedIn$.next(true);
        this.respuesta = res;
      }
    )

    return this.respuesta;
    */
  }

}
