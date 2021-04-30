import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([10, -5, 18, 3]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection);

const charactersCollection = new CharactersCollection('BrianVictoriaDizon');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection);
