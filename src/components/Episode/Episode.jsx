import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {getCharacters} from '../../store/charactersSlice';
import {getEpisodes} from '../../store/episodesSlice';
import style from './Episode.module.css';

export const Episode = () => {
	const {episodes, loading} = useSelector(state => state.episodes);
	const {characters} = useSelector(state => state.characters);
	const episodeId = useParams();
	const dispatch = useDispatch();
	const currentEpisode = episodes.find(item => item.id === +episodeId.id
	);

	useEffect(() => {
		dispatch(getEpisodes());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getCharacters());
	}, [dispatch]);

	return (
		<div className={style.wrapper}>
			<div className={style.card}>
				<h1 className={style.name}>{currentEpisode.name}</h1>
				<span className={style.date}>Release date: {currentEpisode.air_date}</span>
				<div className={style.section}>
					<ul className={style.list}>
						{loading === 'success' && (
							characters.map(item => (
								currentEpisode.characters.map(character => {
									if (item.url === character) {
										return (
											<li className={style.item} key={item.id}>
												<Link
													className={style.link}
													to={`/character/${item.id}`}>
													<img src={item.image} />
												</Link>
											</li>);
									}
								})
							))
						)
						}
					</ul>
				</div>
			</div>
		</div>
	);
};
