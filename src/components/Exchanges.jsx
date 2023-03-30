import React, {useEffect, useState} from "react";

import "../styles/exchanges.css";
import Loader from "./Loader";
import '../styles/loader.css'
const Exchanges = () => {
    document.title="Crypto - Exchanges"
    const [exchange, setExchange]=useState([]);
    const [page, setPage]=useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchExchangeData() {
          setLoading(true)
          const response = await fetch(`https://api.coingecko.com/api/v3/exchanges?page=${page}`)
          let data= await response.json()
          setExchange(data);
          setLoading(false)
        }
        fetchExchangeData();
      }, [page]); 
    
    const handleNext = () =>{
        setPage(page+1);
    }
    const handlePrev = () =>{
        setPage(page-1);
    }

  return (
    <>{loading ?(<Loader/>):(<div className="exchanges_container">
    {exchange.map((element)=>{
        return (<a href={element.url} target="blank" key={element.id}>
        <div className="exchange_item">
          <img
            className="exchange_image"
            src={element.image}
            alt=""
          />
          <div className="exchange_name">{element.name}</div>
          <div className="exchange_rank">Rank : {element.trust_score_rank}</div>
        </div>
      </a>);
    })} 
    <div className="navigation">
        <button disabled={page<=1} className="buttons" onClick={handlePrev}>Prev</button>
        <button disabled={exchange.length<1}className="buttons" onClick={handleNext}>Next</button>
    </div>  
</div>)}
    
       
        
    </>
  );
};

export default Exchanges;
