import {Route, Switch} from "boom-router";
import {About} from "./About.tsx";

export const Routes = () => {
    return <Switch>
        <Route path="/">Welcome!</Route>
        <Route path="/about" component={() => <About/>} />
        <Route path="/:anything*">
            <center>
                <b>404:</b> Sorry, this page isn't ready yet!
            </center>
        </Route>
    </Switch>
}