// import {useEffect, useState} from 'react';
// import {URI_API} from '../api/const';
// export const useFetch = () => {
// 	const [data, setData] = useState({});
// 	const [error, setError] = useState({});

// 	useEffect(() => {
// 		(async () => {
// 			try {
// 				const res = await fetch(`${URI_API}character`);
// 				if (res.ok) {
// 					setData(await res.json());
// 				} else {
// 					throw new Error(res.status);
// 				}
// 			} catch (err) {
// 				setError(err);
// 			}
// 		})();
// 	}, []);
// 	return [data, error];
// };
