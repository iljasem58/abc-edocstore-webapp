import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'oidc-client';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  appTitle: string = 'eDocStore Administrative Panel';
  user: any = null;
  isAuth: boolean = false;

  constructor(private authService: AuthService) {}

  //?????????
  ngOnInit(): void {
    setTimeout(() => {
      this.user = this.authService.getUser();
    }, 1000);
  }

  logOut(): void {
    this.authService.signOut();
  }
}
