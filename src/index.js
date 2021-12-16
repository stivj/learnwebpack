console.log('Hello smthing');

// require('./style.css');
//import './style.css';
import './style.scss';
import Vue from 'vue/dist/vue.common.dev';


new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue',
        items: ['sai', 'piim']
    },
    computed: {
        reversedMessage(){
            return this.message.split('').reverse().join('');
        }
    },
    methods: {
        addItem(){
            if(this.message.trim() !== ''){
            this.items.push(this.message);
            }
            this.message = '';
        }
    }
});

// document.querySelector('#input').addEventListener('input', function(event){
//     document.querySelector('#paragraph').innerHTML = event.target.value;
// });

// document.querySelector('#button').addEventListener('click', function(){
//     document.querySelector('#input').value = '';
//     document.querySelector('#paragraph').innerHTML = '';
// });