# Examples of using pocketbase authentication in next.js

## Getting Started

Set environment variables in `.env.local`:

```
PB_URL=your_pocketbase_url
```

Set secure to false if you are not using https in development:

```js
// pb/login.ts (line 23)
cookies().set("pb_auth", cookie, {
  path: Path,
  expires: new Date(Expires),
  sameSite: SameSite,
  httpOnly: true,
  secure: true,
});
```

## Features

- Handle login and logout with `authWithPassword`
- Token management with next.js cookies
- Middleware to check if user is authenticated
- Block access to routes if user is not authenticated
- API examples

## About

I've been thinking about the most concise and secure way to use basic pocketbase authentication in a next.js app router. If you have a better use case, please let me know.

I'll be adding more examples as I use more pocketbase authentication features.
