import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/home";
import signup from "@/views/signup";
import login from "@/views/login";
import notfound from "@/views/Notfound";
import adlogin from "@/Admin/views/securelogin";

const routes = [
	{
		path: "/",
		name: "home",
		component: home,
	},
	{
		path: "/login",
		name: "login",
		component: login,
	},
	{
		path: "/signup",
		name: "signup",
		component: signup,
	},
	{
		path: "/securelogin",
		name: "securelogin",
		component: adlogin,
	},
	// catch all unregistered routes
	{
		path: "/:pathMatch(.*)*",
		name: "notfound",
		component: notfound,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
