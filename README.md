# Netflix Vue app

This is a basic TV show listing app.

# App structure

All API calls are in a separate file in `/src/app/api.ts` so that it's reusable across the app.

All the types are in a separate `src/app/types.ts` file for re-use.

I have created re-usable `ShowCard` and `ShowCardList` re-usable components.

There is a search input component in the header that is also re-usable and can be used for any other inputs in the app.

I selected Vue as the front end framework because it is the most popular at the moment and one of which I'm most familiar with currently.

I've used a Pinia store to store data and to have different actions to update the state.

The API doesn't provide a search by category endpoint, so I just made a call to the shows endpoint and then I sorted the shows by category to display on the home page.

## First install all dependencies for the app

```sh
npm install
```

### To run the app, run the following command

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
