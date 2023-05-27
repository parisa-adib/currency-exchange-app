import React, {useState, useEffect} from "react";

//API
import {getCoin} from "../services/api";

//components
import Loader from "./Loader";
import Coin from "./Coin";

//style and img
import style from '../styles/Landing.module.css';
import searchIcon from '../gif/zoom.png';

const Landing = () => {
  const [coins, setCoin] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      console.log(data);
      setCoin(data);
    };

    fetchAPI();
  }, []);

  const searchHandler = event => {
    setSearch(event.target.value);
  }

  const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className={style.search_box}>
        <input className={style.search_txt} type="text" name="" placeholder="Type to Search" value={search} onChange={searchHandler}/>
        <a className={style.search_btn} href="#">
        <img src={searchIcon} alt="search" className={style.searchIcon} />
        </a>
      </div>
      {
        coins.length ? (
          <div className={style.container}>
          {
            searchedCoins.map(coin => (
              <Coin 
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                marketcap={coin.market_cap}
                priceChange={coin.price_change_percentage_24h}
              />
            ))
          }
          </div>
        ) : 
        <Loader />
      }
      
    </div>
  );
};

export default Landing;
