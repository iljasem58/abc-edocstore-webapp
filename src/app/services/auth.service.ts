import { Injectable } from '@angular/core';
import {
  UserManager,
  UserManagerSettings,
  User,
  WebStorageStateStore,
} from 'oidc-client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private manager = new UserManager(getClientSettings());
  private user: User = null as any;

  constructor() {
    this.manager.getUser().then((user) => {
      this.user = user as any;
    });
  }

  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  getClaims(): any {
    return this.user.profile;
  }

  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  // completeAuthentication(): Promise<void> {
  //   return this.manager.signinRedirectCallback().then((user) => {
  //     this.user = user;
  //   });
  // }
  //or as asyn method
  async completeAuthentication(): Promise<void> {
    const user = await this.manager.signinRedirectCallback();
    this.user = user;
  }
}

export function getClientSettings(): UserManagerSettings {
  userStore: new WebStorageStateStore({ store: window.localStorage });

  return {
    authority: '',
    client_id: '',
    redirect_uri: 'http://localhost:4200/auth-callback',
    post_logout_redirect_uri: 'http://localhost:4200/',
    response_type: 'id_token token',
    scope: 'openid profile api1',
    filterProtocolClaims: true,
    loadUserInfo: true,
  };
}
