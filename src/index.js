import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css'
// import { resolve } from 'dns';

ReactDOM.render(<App />, document.getElementById('root'));

// new Promise((resolve) =>{

//     setTimeout(() => {
//         resolve('Bears');
//     }, 2000);
// })
// .then(quote=>{
//     console.log(quote);
// })
// class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age
//     }

//     speak=function(){
//         console.log('I am',this.name,'and I am',this.age,'years old')
//     }
// }

// class Lion extends Animal{
//     constructor(name,age,furColor,speed){
//         super(name,age);
//         this.furColor=furColor;
//         this.speed=speed;
//     }

//     roar(){
//         console.log('I have '+this.furColor+'and I can run at a speed '+this.speed)
//     }
// }

// var animal1=new Animal('Puli',15)
// animal1.speak();

// var lion1=new Lion('Simba',20,'Silver',50)
// lion1.speak()
// lion1.roar()