import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Main from './components/Main';
import Character from './components/Character';
const App = () => (
	<>
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Main />} />
				<Route path='character/:id' element={<Character />} />
			</Route>
		</Routes>
	</>
);

export default App;
