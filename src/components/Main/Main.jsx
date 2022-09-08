import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCharacters} from '../../store/charactersSlice';
import {Container} from '../Container/Container';
import {Card} from './Card/Card';
import style from './Main.module.css';

export const Main = () => {
	const {data, loading} = useSelector(state => state.characters);
	// const {next} = useSelector(state => state.characters);
	// if (loading === 'success') console.log(next);
	const endList = useRef(null);
	const dispatch = useDispatch();

	useEffect(() => {
		if (loading === 'loading') return;
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				dispatch(getCharacters());
			}
		}, {
			rootMargin: '50px',
		});

		observer.observe(endList.current);
	}, [endList.current]);

	useEffect(() => {
		// dispatch(getCharacters());
	}, [dispatch]);

	return (
		<div className={style.main}>
			<Container>
				<ul className={style.list}>
					{loading === 'success' &&
						data.results.map(item => (
							<Card
								key={item.id}
								name={item.name}
								species={item.species}
								location={item.location.name}
								img={item.image} />
						))}
					<li className={style.end} ref={endList} />
				</ul>
			</Container>
		</div>
	);
};
