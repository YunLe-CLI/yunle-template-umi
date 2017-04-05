export default [
		{
		path: '*',
		name: 'notFoundAuA',
		breadcrumbName: '404',
		_indexRoute: false,
		getComponents(nextState, callback) {
			require.ensure([], (require) => {
				callback(null, require('./index').default);
			});
		},
		childRoutes: [],
	},
];
