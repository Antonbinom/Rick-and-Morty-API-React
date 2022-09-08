import style from './Card.module.css';
import PropTypes from 'prop-types';

export const Card = ({name, species, location, img}) => (
	<div className={style.card}>
		<a className={style.name} href='/'>{name}</a>
		<img src={img} alt="" />
		<div className={style.info}>
			<span className={style.text}>Species: {species}</span>
			<span className={style.text}>Location: {location}</span>
		</div>
	</div>
);

Card.propTypes = {
	name: PropTypes.string,
	species: PropTypes.string,
	location: PropTypes.string,
	img: PropTypes.string,
};
