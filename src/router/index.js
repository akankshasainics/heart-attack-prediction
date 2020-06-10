import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/details.vue";
import Age from "../views/Age.vue"
import Gender from "../views/Gender.vue"
import ChestPain from "../views/ChestPain.vue"
import RBP from "../views/RBP.vue"
import SerumCholestrol from "../views/SerumCholestrol.vue"
import FastingBloodSugar from "../views/FastingBloodSugar.vue"
import RER from "../views/RER.vue"
import HeartRate from "../views/HeartRate.vue"
import Exercise from "../views/Exercise.vue"
import STdepression from "../views/STdepression.vue"
import Slope from "../views/Slope.vue"
import Vessels from "../views/Vessels.vue"
import Thal from "../views/Thal.vue"
import Result from "../views/result.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/details",
    name: "details",
    component: Details,
  },
  {
    path: "/age",
    name: "age",
    component: Age
  },
  {
    path: "/gender",
    name: "gender",
    component: Gender
  },
  {
    path: "/chestPain",
    name: "chestPain",
    component: ChestPain
  },
  {
    path: "/resting-blood-pressure",
    name: "resting-blood-pressure",
    component: RBP
  },
  {
    path: "/serum-cholestrol",
    name: "serum-cholestrol",
    component: SerumCholestrol
  },
  {
    path: "/fasting-blood-suger",
    name: "fasting-blood-suger",
    component: FastingBloodSugar,
  },
  {
    path: "/resting-electroCardiographics-result",
    name: "/resting-electroCardiographics-result",
    component: RER
  },
  {
    path: "/maximum-heart-rate",
    name: "maximum-heart-rate",
    component: HeartRate
  },
  {
    path: "/exercise-induced-angina",
    name: "exercise-induced-angina",
    component: Exercise
  },
  {
    path: "/ST-depression",
    name: "ST-depression",
    component: STdepression
  },
  {
    path: "/slope-ST segment",
    name: "slope-ST segment",
    component: Slope
  },
  {
    path: "/no-of-vessels",
    name: "no-of-vessels",
    component: Vessels
  },
  {
    path: "/thal",
    name: "thal",
    component: Thal
  },
  {
    path: "/result",
    name: "result",
    component: Result
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
