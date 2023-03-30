import React, {useEffect, useState} from "react";
import styles from "../styles/coins.module.css";
import Loader from "./Loader";
import '../styles/loader.css'

const Coins = () => {
  document.title="Crypto - Coins"
  const [coins, setCoins]=useState([]);
    const [page, setPage]=useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      async function fetchCoinsData() {
        setLoading(true)
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=${page}&sparkline=false`)
        let data= await response.json()
        console.log(data);
        setCoins(data);
        setLoading(false)
      }
      fetchCoinsData();
    }, [page]); 

    const handleNext = () =>{
      setPage(page+1);
  }
  const handlePrev = () =>{
      setPage(page-1);
  }

  return (
        <>{loading ?(<Loader/>):(<div className={styles.coins_container}>
    {coins.map((element)=>{
        return (<a href={`/coin/${element.url}`}>
        <div className={styles.coin_item} key={element.id}>
          <img
            className={styles.coin_image}
            src={element.image}
            alt=""
          />
          <div className={styles.coin_name}>{element.name} - {element.symbol}</div>
          <div className={styles.coin_rank}>{element.current_price} INR</div>
        </div>
      </a>);
    })} 
    <div className={styles.navigation}>
        <button disabled={page<=1} className={styles.buttons} onClick={handlePrev}>Prev</button>
        <button disabled={coins.length<1}className={styles.buttons} onClick={handleNext}>Next</button>
    </div>  
</div>)}
    
       
        
    </>
  )
}

export default Coins
