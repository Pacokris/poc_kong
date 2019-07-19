import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://so017-poam-lsrsbk1-1.sii24.pole-emploi.intra:20362/connexion/oauth2/individu',

  // URL of the SPA to redirect the user to after login
  redirectUri: `http://localhost:4200`,

  // URL to be used for the silent refresh callback redirect
  silentRefreshRedirectUri: `http://localhost:4200`,

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'agent_kong_oidc',
  dummyClientSecret: 'password',

  // set the scope for the permissions the client should request
  scope: 'openid',
};