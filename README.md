<div align="center">
  <img src="public/logo.svg" width="80" alt="Boom Router — a minimalistic React router" />
</div>

<br />

<div align="center">
  <b>React Boilerplate</b> is a simple boilerplate for React applications. <br />
</div>

It is set up with Vite, TypeScript, npm, and uses [boom-router](https://www.npmjs.com/package/boom-router) for routing.

## Features

- React 18.2.0
- Vite 2.6.4
- TypeScript 5.2.2
- Routing with `boom-router`

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/rohit1901/react-boilerplate.git
```

2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

This will start the development server and open your application in a web browser. Any changes you make to your code will automatically be reflected in the browser.

## Routing

This boilerplate uses `boom-router` for routing. The routes are defined in the `src/Routes.tsx` file. Here is a basic example of how to define routes:

```tsx
import {Route, Switch} from "boom-router";
import {About} from "./About.tsx";

export const Routes = () => {
    return <Switch>
        <Route path="/">Welcome!</Route>
        <Route path="/about" component={() => <About/>} />
        <Route path="/:anything*">
            <center>
                <b>404:</b> Route not found! <code>#fuck 🤔</code>
            </center>
        </Route>
    </Switch>
}
```

## License

This project is licensed under the MIT License.