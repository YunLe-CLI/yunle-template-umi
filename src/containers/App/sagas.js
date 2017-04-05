import config from '../config';

const d = config.map((item, index) => {
	const data = require(`../${item.root}/sagas`).default;
	return data;
});

export default function* rootSaga() {
	const rootSagas = [];
	yield rootSagas.concat(d);
}
