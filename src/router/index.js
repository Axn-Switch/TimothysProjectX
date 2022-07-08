import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home'
import login from '@/views/login'
import signup from '@/views/signup'
import notfound from '@/views/notFound'
import broadcasts from '@/views/broadcasts'
import users from '@/views/users'

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
