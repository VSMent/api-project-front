import HelloWorld from '../components/HelloWorld.vue'
import WelcomeItem from '../components/WelcomeItem.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld,
  },
  {
    path: '/events',
    name: 'Events',
    component: WelcomeItem
  },
  {
    path: '/chat',
    name: 'Chat',
    component: WelcomeItem
  },
  {
    path: '/logs',
    name: 'Logs',
    component: WelcomeItem
  },
  {
    path: '/settings',
    name: 'Settings',
    component: WelcomeItem
  },
  // {
  //   path: '/events/:id',
  //   name: 'EventDetails',
  //   // Можна використовувати ледаче завантаження (lazy loading)
  //   component: () => import('@/views/EventDetailView.vue')
  // }
];

