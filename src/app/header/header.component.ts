import { AuthService } from './../services/auth.service';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'oidc-client';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public appTitle: string = 'eDocStore Administrative Panel';
  public user: any = null;
  private sub: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.sub = this.authService.getUser().subscribe((userData) => {
      console.log('users', userData);
      this.user = userData
    });
  }

  logOut(): void {
    this.authService.signOut();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
