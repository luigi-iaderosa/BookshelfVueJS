import Home from './components/Home.vue';
import Bookshelf from './components/Bookshelf.vue';
import AddToBookshelf from './components/AddToBookShelf.vue';
export const routes = [
  {path:'', component: Home,name:'home'},
  {path:'/bookshelf/:id', component: Bookshelf,name:'bookshelf'},
  {path:'/bookshelf/:id/add-book', component: AddToBookshelf,name:'bookshelf-add-book'}
];
