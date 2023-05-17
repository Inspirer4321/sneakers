import React from 'react';
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Content from "./components/Content";

const arr = [
    { text: "Мужские Кроссовки Nike Blazer Mid Suede", 
    price: 12999,
    imageUrl: '/img/sneakers/1.jpg'
  },
    { text: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    imageUrl: '/img/sneakers/2.jpg'},
    { text: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageUrl: '/img/sneakers/3.jpg'},
    { text: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: '/img/sneakers/4.jpg'},
];

function App() {
  const [cartOpened, setCartOpened] = React.useState(false)

  return (
    <>
      <div className="wrapper clear" >
        {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
        <Header onClickCart={() => setCartOpened(true)} />
        <Content />
          
          <div className="d-flex">
            
            {arr.map((obj) =>(<Card 
             text={obj.text}
             price={obj.price}
             imageUrl={obj.imageUrl} 
             onFavorite={() =>console.log('Добавили в закладки')}
             onPlus={() =>console.log('Нажали на плюс')}
             />

             ))}
            
          </div>
      </div>
    </>
  );
}

export default App;
