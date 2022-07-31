import broadcasts from '@/views/broadcasts'
import home from '@/views/home'
import login from '@/views/login'
<<<<<<< HEAD
import signup from '@/views/signup'
import notfound from '@/views/Notfound'
import broadcasts from '@/views/broadcasts'
import users from '@/views/users'
=======
>>>>>>> 7a0cffb176ca5198b7d064eb4834f93fcb021bc8
import metrics from '@/views/metrics'
import notfound from '@/views/Notfound'
import signup from '@/views/signup'
import users from '@/views/users'
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
