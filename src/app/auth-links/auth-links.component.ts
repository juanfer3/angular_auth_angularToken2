import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-auth-links',
  templateUrl: './auth-links.component.html',
  styleUrls: ['./auth-links.component.scss']
})
export class AuthLinksComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public authService: AuthService,
    private router: Router
  ) { }

  logOut() {
    this.auth.logOut().subscribe(
      res => this.router.navigate(['/'])
    )
  }

  ngOnInit() {
  }

}
