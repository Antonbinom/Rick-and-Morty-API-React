import style from './Container.module.css';
import PropTypes, {oneOfType} from 'prop-types';

export const Container = ({children}) => (
	<div className={style.container}>{children}</div>
);

Container.propTypes = {
	children: oneOfType([
		PropTypes.object,
		PropTypes.array,
	])
};
