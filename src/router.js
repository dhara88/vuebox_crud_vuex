import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Users from './components/Users.vue';
import Edit from './components/Edit.vue';

Vue.use(VueRouter);



const routes = [
    {
      name: 'Home',
      path: '/home',
      component: Home
    },
    {
      name: 'Users',
      path: '/users',
      component: Users
    },
    {
      name: 'Edit',
      path: '/edit',
      component: Edit
    },
  ];
  
  
  const router = new VueRouter({ mode: 'history', routes: routes });
  
  router.beforeResolve((to, from, next) => {
    if (to.name) {
        // NProgress.start()
    }
    next()
  });
  // router.beforeEach((to, from, next) => {
  //   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  //   else next()
  // })
  router.afterEach(() => {
    // NProgress.done()
  });
  
  

  export default router
