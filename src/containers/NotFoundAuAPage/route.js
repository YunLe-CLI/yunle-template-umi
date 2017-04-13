const getComponents = (nextState, callback) => {
	require.ensure([], (require) => {
		callback(null, require('./index').default);
	});
}
export default [
	{
		path: '*',
		name: 'notFoundAuA',
		breadcrumbName: '404',
		_indexRoute: false,
		getComponents,
		childRoutes: [],
	},
];
