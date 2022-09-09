import style from './Card.module.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export const Card = ({name, species, location, img, episodes, id}) => (
	<div className={style.card}>
		<Link className={style.name} to={`character/${id}`}>{name}</Link>
		<img src={img} alt="" />
		<div className={style.info}>
			<span className={style.text}>Species: {species}</span>
			<span className={style.text}>Location: {location}</span>
		</div>
		<ul className={style.episodes}>
			{episodes.map((episode, index) => (
				(index < 5) &&
				(<li key={index}>{episode}</li>)
			)
			)}
		</ul>
	</div>
);

Card.propTypes = {
	name: PropTypes.string,
	species: PropTypes.string,
	location: PropTypes.string,
	img: PropTypes.string,
	id: PropTypes.number,
	episodes: PropTypes.array
};
