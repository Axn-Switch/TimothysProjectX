import broadcasts from '@/views/broadcasts'
import home from '@/views/home'
import login from '@/views/login'
import metrics from '@/views/metrics'
import notfound from '@/views/Notfound'
import signup from '@/views/signup'
import users from '@/views/users'
import userhome from '@/views/userhome'
import watch from '@/views/watch'
import { createRouter, createWebHistory } from 'vue-router'

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
		path: '/account/broadcasts',
		name: 'broadcasts',
		component: broadcasts,
	},
	{
		path: '/account/users',
		name: 'users',
		component: users,
	},

	{
		path: '/account/metrics',
		name: 'metrics',
		component: metrics,
	},
	{
		path: '/account/userhome',
		name: 'userhome',
		component: userhome,
	},
	{
		path: '/account/watch',
		name: 'watch',
		component: watch,
	},

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
