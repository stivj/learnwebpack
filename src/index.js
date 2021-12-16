console.log('Hello smthing');

// require('./style.css');
//import './style.css';
import './style.scss';
import Vue from 'vue/dist/vue.common.dev';

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue'
    }
});

document.querySelector('#input').addEventListener('input', function(event){
    document.querySelector('#paragraph').innerHTML = event.target.value;
});

document.querySelector('#button').addEventListener('click', function(){
    document.querySelector('#input').value = '';
    document.querySelector('#paragraph').innerHTML = '';
});