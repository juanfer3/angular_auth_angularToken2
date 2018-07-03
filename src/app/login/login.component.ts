

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

/**Servicios */
import { AuthService } from './../servicios/auth.service';

/**Models */
import { User } from './../Models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private respuesta: any;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  logIn(form: NgForm) {

    const loginUser: User = {
      email: form.value.email,
      password: form.value.password
    };

    this.auth.logIn(loginUser).subscribe(
      res => {
        if (res.status === 200) {
          this.auth.isLoggedIn(true);
          this.router.navigate(['/profile']);
        }
      }
    );

  }

  ngOnInit() {
  }

}
