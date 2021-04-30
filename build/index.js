"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var Sorter_1 = require("./Sorter");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, -5, 18, 3]);
var sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection);
