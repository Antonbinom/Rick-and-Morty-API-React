import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Main from './components/Main';
import Character from './components/Character';
import Episode from './components/Episode/';

const App = () => (
	<>
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Main />} />
				<Route path='character/:id' element={<Character />} />
				<Route path='episode/:id' element={<Episode />} />
			</Route>
		</Routes>
	</>
);

export default App;
