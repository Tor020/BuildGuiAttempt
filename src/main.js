import Vue from 'vue';
Vue.config.productionTip = false;
import style from './sass/style.scss'; 
import Root from './components/Root'; //Must capitalize Component




let output = document.getElementById('root');

output.innerHTML = render('div', 'the text', 'color:blue;font-size:35px')


import {render} from './GuiBuilder'; 




