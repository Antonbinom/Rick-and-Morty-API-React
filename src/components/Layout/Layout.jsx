// import style from './Layout.module.css';

import {Outlet} from 'react-router-dom';
import {Header} from '../Header/Header';

export const Layout = () => (
	<div>
		<Header />
		<Outlet />
	</div>
);
