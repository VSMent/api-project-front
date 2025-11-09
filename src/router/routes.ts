import HomeView from '../views/HomeView.vue'
import EventListView from '../views/EventListView.vue'
import EventDetailView from '../views/EventDetailView.vue'
import IntegrationsView from '../views/IntegrationsView.vue'
import SettingsView from '../views/SettingsView.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/events',
    name: 'Events',
    component: EventListView
  },
  {
    path: '/chat',
    name: 'Chat',
    component: EventDetailView
  },
  {
    path: '/integrations',
    name: 'Integrations',
    component: IntegrationsView
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsView
  },
  // {
  //   path: '/events/:id',
  //   name: 'EventDetails',
  //   // Можна використовувати ледаче завантаження (lazy loading)
  //   component: () => import('@/views/EventDetailView.vue')
  // }
]

