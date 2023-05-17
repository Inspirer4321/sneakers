import React from "react";

function Card(props) {

  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  }

  return (
    <div className="card">
      <div className="favorite" onClick={props.onFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={113} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.text}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
          <img className="plus" onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
      </div>
    </div>
  );
}

export default Card;
