// Si algo no funciona es porque no instalé todas las dependencias que dice aqui: https://nate-d-gage.medium.com/configuring-jest-with-next-js-6670f0026dd9
// Puede fallar por ser .ts

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
    adapter: new Adapter()
});