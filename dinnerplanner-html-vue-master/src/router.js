import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import SelectDish from '@/components/SelectDish'
import { modelInstance } from "@/data/DinnerModel"
import DishDetail from '@/components/DishDetail';

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
      name: 'DishDetail',
      component: DishDetail,
      props: function(route) {
           return {
          id: route.params.id,
          model: modelInstance
        }
      }
    }
  ]
})
