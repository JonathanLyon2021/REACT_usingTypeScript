import React from 'react';
import logo from './logo.svg';
import './App.css';

let name: string = "Jonathan";
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

//function printName(name: string) {
//  console.log(name);
//}
let printName: (name: string) => never;

let personName: unknown;

interface Person {
  name: string;
  age?: number;
}

interface Guy extends Person {
  profession: string;
}

type x = {
  a: string;
  b: number;
}

  *type Person = {
  name: string;
  age: number;
};

let person: Person = {
  name: "Jonathan",
}

let lotsOfPeople: Person[];*/
let person:Name: unknown;
  
const App: React.FC = () => {
  return (<div className="App">
    <span classsName= "heading">Taskify</span>
    </div>);
}

export default App;

