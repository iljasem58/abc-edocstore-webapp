import { Injectable } from '@angular/core';
import {
  UserManager,
  UserManagerSettings,
  User,
  WebStorageStateStore,
} from 'oidc-client';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private manager = new UserManager(getClientSettings());
  private user: User = null as any;
  private systemUser = new Subject<any>();

  constructor() {
    this.manager.getUser().then((user) => {
      this.user = user as any;
    });
  }

  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  getUser() {
    return this.systemUser.asObservable();
  }

  getClaims(): any {
    return this.user && this.user.profile;
  }

  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  signOut(): Promise<void> {
    return this.manager.signoutRedirect();
  }

  // completeAuthentication(): Promise<void> {
  //   return this.manager.signinRedirectCallback().then((user) => {
  //     this.user = user;
  //   });
  // }
  //or as async method
  async completeAuthentication(): Promise<void> {
    const user = await this.manager.signinRedirectCallback();
    this.user = user;
    this.systemUser.next(user);
  }
}

export function getClientSettings(): UserManagerSettings {
  userStore: new WebStorageStateStore({ store: window.localStorage });

  return {
    authority: 'https://elietaauth-dev-ic.abcsoftware.lv',
    client_id: 'elieta-edocstore-webapp-local',
    redirect_uri: window.location.origin + '/auth/callback',
    post_logout_redirect_uri: window.location.origin + 'auth/logout',
    silent_redirect_uri: window.location.origin + '/auth/renew',
    scope: 'openid employee edocstore',
    response_type: 'code',
    filterProtocolClaims: true,
    loadUserInfo: true,
    automaticSilentRenew: false,
    includeIdTokenInSilentRenew: false,
  };
}
