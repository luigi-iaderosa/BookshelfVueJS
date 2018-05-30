import Home from './components/Home.vue';
import Bookshelf from './components/Bookshelf.vue';
export const routes = [
  {path:'', component: Home,name:'home'},
  {path:'/bookshelf/:id', component: Bookshelf,name:'bookshelf'}
];
