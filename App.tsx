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
