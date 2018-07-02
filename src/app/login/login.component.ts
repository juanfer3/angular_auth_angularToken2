

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

/**Servicios */
import { AuthService } from './../servicios/auth.service';

/**Models */
import { User } from './../Models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private respuesta: any

  constructor(
    private auth: AuthService
  ) { }

  logIn(form: NgForm) {

    const loginUser: User = {
      email: form.value.email,
      password: form.value.password
    };

    const data = this.auth.logIn(loginUser);
    console.log('data:');
    console.log(data);
  }

  ngOnInit() {
  }

}
