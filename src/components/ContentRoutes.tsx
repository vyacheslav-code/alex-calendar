import { Switch, Route } from 'react-router-dom';
import { Schedule, Weather } from '../screens';
import { AppLinks } from '../typings';

export const ContentRoutes = () => {
    return (
        <Switch>
            <Route path={`/${AppLinks.Weather}`}>
                <Weather />
            </Route>
            <Route path={`/${AppLinks.Schedule}`}>
                <Schedule />
            </Route>
        </Switch>
    );
};