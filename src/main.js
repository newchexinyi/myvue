// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import './assets/rem'
import './assets/reset.css'
import App from './App'
import router from './router'
import Vue from 'vue';
import { Button,Col, Row,Search,Tabbar, TabbarItem,List,Cell, CellGroup,Tab, Tabs,Grid, GridItem,Tag,Image as VanImage } 
from 'vant';


Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Button);
Vue.use(List);
Vue.use(Col);
Vue.use(Row);
Vue.use(Search);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Tag);
Vue.use(VanImage);

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
