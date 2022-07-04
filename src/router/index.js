
const routes = [
	{
		path: '/',
		name: 'home',
		component: home,
	},
	{
		path: '/login',
		name: 'login',
		component: login,
	},
	{
		path: '/signup',
		name: 'signup',
		component: signup,
	},
	{

	// catch all unregistered routes
	{
		path: '/:pathMatch(.*)*',
		name: 'notfound',
		component: notfound,
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
