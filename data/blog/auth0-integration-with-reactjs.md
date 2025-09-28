---
title: "Integrating Auth0 Authentication in ReactJS"
date: "2024-10-05"
readTime: "7 min read"
slug: "auth0-integration-with-reactjs"
---

# Integrating Auth0 Authentication in ReactJS

Auth0 is a popular authentication-as-a-service platform. In this post, we'll integrate Auth0 into a ReactJS app for secure login and logout.

## Why Auth0?

- **Easy integration** with React
- **Supports social logins** (Google, Facebook, etc.)
- **Secure and scalable**

## Setting Up Auth0

1. Sign up at [Auth0](https://auth0.com/)
2. Create a new application (Single Page Application)
3. Note your **Domain** and **Client ID**

## Installing SDK

```bash
npm install @auth0/auth0-react
```

## Configuring the Provider

Wrap your app with `Auth0Provider`:

```jsx
import { Auth0Provider } from "@auth0/auth0-react";

<Auth0Provider
  domain="YOUR_DOMAIN"
  clientId="YOUR_CLIENT_ID"
  authorizationParams={{
    redirect_uri: window.location.origin,
  }}
>
  <App />
</Auth0Provider>;
```

## Using Auth0 Hooks

```jsx
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  if (!isAuthenticated) {
    return <button onClick={() => loginWithRedirect()}>Log in</button>;
  }

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log out
      </button>
    </div>
  );
}
```

## Conclusion

Auth0 makes authentication in ReactJS simple and secure. Explore more features like roles, permissions, and social logins in the Auth0 dashboard.
