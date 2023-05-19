import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  

  React.useEffect(() => {
      axios.get("https://6464c842127ad0b8f8a7d62b.mockapi.io/items").then(res => {
        setItems(res.data)
      })
      axios.get("https://6464c842127ad0b8f8a7d62b.mockapi.io/cart").then(res => {
        setCartItems(res.data)
      })
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://6464c842127ad0b8f8a7d62b.mockapi.io/cart", obj);    
    setCartItems(prev => [...prev, obj]);
  };

  const onRemoveItem = (id) => {  
    axios.delete(`https://6464c842127ad0b8f8a7d62b.mockapi.io/cart/${id}`);    
    setCartItems((prev) => prev.filter(item => item.id !== id));
  } 

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div className="wrapper clear">
        {cartOpened && (
          <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
        )}
        <Header onClickCart={() => setCartOpened(true)} />

        <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && <img onClick={() => setSearchValue('')} className="clear" src="/img/btn-remove.svg" alt="Clear" />}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
        </div>
      </div>
    </div>

        <div className="d-flex flex-wrap">
          {items.filter((item)   => item.text.toLowerCase().includes(searchValue)).map((item, index) => (
            <Card
              key={index}
              text={item.text}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log("Добавили в закладки")}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
