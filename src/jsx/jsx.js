import React from 'react'; // musi być ten import jeśli JSX mają działać!


// przypisywanie do zmiennych
const paragraph = <p>Hello world!</p>;


// zagnieżdżanie
const box = (
  <div>
    <p>Hello world!</div>
  </div>
);


// wstrzykiwanie wyrażeń
const text = 'Hello world!';
const injectedText = <p>{text}</p>;

const number = 10;
const calc = <p>{number * 3}</p>;


// atrybuty
const textWithClass1 = <p className="hello">Hello world!</p>;

const helloClass = 'hello';
const textWithClass2 = <p className={helloClass}>Hello world!</p>;

const textWithClass3 = <p className={number === 10 ? 'hello' : 'good-by'}>Hello world!</p>;

const styleObject = { color: 'red', fontWeight: 'bold' };
const inlineStyle = <p style={styleObject}>Hello world!</p>


// wyświetlanie warunkowe
let conditional;
if (number === 10) {
  conditional = <p>Hello world</p>;
} else {
  conditional = null;
}

const box2 = <div>{conditional}</div>;
const box3 = <div>{number === 10 ? <p>Hello world</p> : null}</div>;


// wyświetlanie elementów tablicy
const items = [1, 2, 3, 4];
const list = (
  <ul>
    {items.map((item, index) => {
      return <li key={index}>{item}</li>
    })}
  </ul>
);
