# Waldo Pizza

## Project Setup

First, install the project's dependencies:

```bash
npm install
# or
yarn
```

Secondly, run the project in development mode:

```bash
npm run dev
# or
yarn dev
```

And finally open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Preview

This project was also deployed on Vercel to make the process easier for everyone.

You can access the project [here]().

## Notes

### UX

The toppings are reset to their default selected state when the pizza size is changed, since each pizza size can have a different maximum amount of toppings.

An alternative to this would be to keep the topings selected when changing sizes, however that would require validation errors to show up and force the user to "correct" their choices, which might create confusion if it's not clear.

### Styling

The project as of time of writing is basically completely unstyled, although in the coming days I will clean up the design slightly to make a clearer UX and to make it easy to understand how to interact with the app. (I am aware that it won't be taken into consideration for the evaluation).

### State Management

I decided to fully leverage Apollo Client and its [Reactive Variables](https://www.apollographql.com/docs/react/local-state/reactive-variables/) for managing the state of the app.
