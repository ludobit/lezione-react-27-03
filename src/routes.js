export default [
    {
        component: require('./components/containers/login').default,
        routePath: '/login',
        name: 'login',
        visibility: 'all'
    },
    {
        component: require('./components/containers/dashboard').default,
        routePath: '/dashboard',
        name: 'dashboard',
        visibility: 'auth'
    },
    {
        component: require('./components/containers/login').default,
        routePath: '/',
        name: 'login',
        visibility: 'all'
    }
];
