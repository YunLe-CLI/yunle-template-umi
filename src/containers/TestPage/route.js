const getComponents = (nextState, callback) => {
	require.ensure([], (require) => {
		callback(null, require('./index').default);
	});
}
export default [
	{
		path: '/__template__',
		name: '__template__',
		breadcrumbName: '模板页',
		_indexRoute: true,
		getComponents,
		childRoutes: [],
	},
];
