import React, {useContext} from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Courses from '../Courses/Courses';

import bemCssModules from 'bem-css-modules';

import { default as ContentStyles } from './Content.module.scss';
import { StoreContext } from '../../store/StoreProvider';

const style = bemCssModules(ContentStyles);

const ADMIN_TYPE = 1;

const Content = () => {
  const {user} = useContext(StoreContext);

  const isUserLogged = Boolean(user);
  const isAdmin = user?.accessLevel === ADMIN_TYPE  
    ? <Route exact path="/menage-courses" render={() => <p>Zarządzanie kursami</p> } />
    : console.log("Brak Admina");

   //console.log("User =", user.accessLevel);

  //console.log("IsAdmin = ", isAdmin);

	return (
		<main className={style()}>
			<Switch>
        <Route exact path="/" render={() => <Courses/>} />
        { isUserLogged && <Route exact path="/my-courses" render={() => <p>Moje kursy</p>} /> }
        { isAdmin }
        <Redirect to="/"/>
      </Switch>
		</main>
	);
};

export default Content;
