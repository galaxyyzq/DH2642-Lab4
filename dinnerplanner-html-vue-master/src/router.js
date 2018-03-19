import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import SelectDish from '@/components/SelectDish'
import { modelInstance } from "@/data/DinnerModel"
import DishDetail from '@/components/DishDetail';
import ConfirmDinner from '@/components/ConfirmDinner';
import PrintPage from '@/components/PrintPage';
import WatchDetail from '@/components/WatchDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/search',
      name: 'SelectDish',
      component: SelectDish,
      props: { model: modelInstance }  
    },
    {
      path: '/dish/:id',
      name: 'WatchDetail',
      component: WatchDetail,
      props: function(route) {
           return {
          id: route.params.id,
          model: modelInstance
        }
      }
    },
      {
      path: '/confirm',
      name: 'ConfirmDinner',
      component: ConfirmDinner,
      props: { model: modelInstance }
    },
      {
      path: '/print',
      name: 'PrintPage',
      component: PrintPage,
      props: { model: modelInstance }
    },
  ]
})
