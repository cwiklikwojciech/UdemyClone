import React from 'react';
import bemCssModule from 'bem-css-modules';
import { Link } from 'react-router-dom';

import { default as AsideMenuStyles } from '../AsideMenu.module.scss';

const style = bemCssModule(AsideMenuStyles);

const AdminMenu = () => (
  <>
    <p className={style('title')}>Panel administaratora</p>
    <nav>
      <ul>
        <li className={style('link')}>
          <Link to="/manage-courses" > Xarządzanie kursami </Link>
        </li>
      </ul>
    </nav>
  </>
);

export default AdminMenu;