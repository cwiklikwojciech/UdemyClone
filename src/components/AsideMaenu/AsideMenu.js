import React, { useContext } from 'react';
import bemCssModule from 'bem-css-modules';

import AdminMenu from './subcomponents/AdminMenu';
import UserMenu from './subcomponents/UserMenu';
import { StoreContext } from '../../store/StoreProvider';

import { default as AsideMenuStyle } from './AsideMenu.module.scss';

const style = bemCssModule(AsideMenuStyle);

const ADMIN_TYPE = 1;

const AsideMenu = () => {
	const { user } = useContext(StoreContext);

	const adminMenuComponent = user?.accessLevel === ADMIN_TYPE ? <AdminMenu /> : null;

	console.log("adminMenuComponent", adminMenuComponent);

	return (
		<section className={style()}>
			<div className={style('nav-wrapper')}>
				<UserMenu isUserLogged={Boolean(user)} />
				{adminMenuComponent}
			</div>
		</section>
	);
};

export default AsideMenu;
