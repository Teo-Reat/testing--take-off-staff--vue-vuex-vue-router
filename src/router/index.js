import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blacklists from "../views/Blacklists";
import Users from "../views/users/Users";
import UsersConditions from "../views/users/UsersConditions";
import UsersQuestions from "../views/users/UsersQuestions";
import UsersLogic from "../views/users/UsersLogic";
import UsersSettings from "../views/users/UsersSettings";
import UsersRespondents from "../views/users/UsersRespondents";
import UsersNavigation from "../views/users/UsersNavigation";
import Polls from "../views/Polls";
import CallCentre from "../views/CallCentre";


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/polls",
        name: "Polls",
        component: Polls
    },
    {
        path: '/users', component: Users,
        children: [
            { path: '/users/settings', component: UsersSettings, name: 'settings' },
            { path: '/users/logic', component: UsersLogic, name: 'logic' },
            { path: '/users/questions', component: UsersQuestions, name: 'questions' },
            { path: '/users/conditions', component: UsersConditions, name: 'conditions' },
            { path: '/users/respondents', component: UsersRespondents, name: 'respondents' },
        ]
    },
    {
        path: "/blacklists",
        name: "Blacklists",
        component: Blacklists

    },
    {
        path: "/call-centre",
        name: "CallCentre",
        component: CallCentre
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
