# Runestone with React

> An example of using React within Runestone. 

This project contains:

- A PreTeXt document for testing purposes
- Code examples for interactives in [the assets folder](/assets/code/), including the React example.

## How do I see this test PreTeXt document on my browser?

1. Build `min-react-interactive` using its build script.
   - If you are using `pnpm`, run `pnpm build` under [assets/code/min-react-interactive](/assets/code/min-react-interactive). 
2. Run `pretext build web`.
3. Run `pretext view web`.

## How does the example React interactive work?

We take advantage of Vite's [Library Mode](https://vite.dev/guide/build#library-mode) to bundle our `interactive` code with React inside one neat little script.

For how the example itself works, we:

1. Make and expose a React root using the `slate` tag in our PreTeXt `interactive`,

2. Grab the root element in our script and do normal React things with it,

3. Link our PreTeXt `interactive` with our build output, so that our PreTeXt book runs the script.