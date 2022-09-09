import {Link} from 'react-router-dom';
import {Container} from '../Container/Container';
import style from './Header.module.css';
import {ReactComponent as HeaderIcon} from './img/icon.svg';

export const Header = () => (
	<div className={style.header}>
		<Container>
			<div className={style.wrapper}>
				<Link className={style.link} to={'/'}>
					< HeaderIcon />
				</Link>
			</div>
		</Container>
	</div >
);
