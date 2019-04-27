import Vue from "vue";
import Router from "vue-router";

import LandingView from "@/views/LandingView";
import HomeView from "@/views/HomeView";

import ConversationView from "@/views/ConversationView";
import InboxView from "@/views/InboxView";

import TopicListView from "@/views/TopicListView";
import TopicResultView from "@/views/TopicResultView";

import SignUpView from "@/views/Signup/SignUpView";
import SignUpMain from "@/views/Signup/SignUpMain";
import SignUpSeeker from "@/views/Signup/SignUpSeeker";
import SignUpWiseman from "@/views/Signup/SignUpWiseman";

import ProfileView from "@/views/ProfileView";
import UserProfileView from "@/views/UserProfileView";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "LandingView",
      component: LandingView
    },
    {
      path: "/home",
      name: "HomeView",
      component: HomeView
    },
    // INBOX ROUTE
    {
      path: "/inbox/:uid", // uid: User ID
      name: "InboxView",
      component: InboxView
    },
    {
      path: "/inbox/:uid/:cid", // cid: Conversation ID
      name: "ConversationView",
      component: ConversationView
    },
    // TOPIC ROUTE
    {
      path: "/topics",
      name: "TopicListView",
      component: TopicListView
    },
    {
      path: "/topics/:id",
      name: "TopicResultView",
      component: TopicResultView
    },
    // USER ROUTE
    {
      path: "/profile",
      name: "ProfileView",
      component: ProfileView
    },
    {
      path: "/profile/:id",
      name: "UserProfileView",
      component: UserProfileView
    },
    // WISEMAN ROUTE
    {
      path: "/signup",
      name: "SignUpView",
      component: SignUpView,
      children: [
        {
          path: "",
          component: SignUpMain
        },
        {
          path: "wiseman",
          component: SignUpWiseman
        },
        {
          path: "seeker",
          component: SignUpSeeker
        }
      ]
    }
  ]
});
