import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getCharacters} from '../../store/charactersSlice';
import style from './Character.module.css';

export const Character = () => {
	const {characters} = useSelector(state => state.characters);
	const characterId = useParams();
	const dispatch = useDispatch();
	const newCharacters = characters.find(item => item.id === +characterId.id);

	useEffect(() => {
		dispatch(getCharacters);
	});

	return (
		<div className={style.wrapper}>
			<div className={style.card}>
				<h1 className={style.name}>{newCharacters.name}</h1>
				<img src={newCharacters.image} alt="Character:{newCharacters.name}" />
				<div className={style.info}>
					<span className={style.text}>Species: {newCharacters.species}</span>
					<span className={style.text}>Location: {newCharacters.location.name}</span>
				</div>
			</div>
		</div>
	);
};
