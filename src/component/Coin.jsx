import React from "react";

//style
import style from '../styles/Coins.module.css';

const Coin = ({ name, image, symbol, price, marketcap, priceChange }) => {
  return (
    <div className={style.container}>
      <img src={image} alt={name} className={style.currency_img} />
      <span className={style.name}>{name}</span>
      <span className={style.symbol}>{symbol.toUpperCase()}</span>
      <span className={style.currentPrice}>$ {price.toLocaleString()}</span>
      <span className={ priceChange > 0 ? style.greenPriceChange : style.redPriceChange}>{priceChange}</span>
      <span>$ {marketcap.toLocaleString()}</span>
    </div>
  );
};

export default Coin;
