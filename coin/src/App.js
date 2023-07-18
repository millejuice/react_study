import React from 'react';
import './App.css';

function App() {
  const [loading,setloading] = React.useState(true);
  const [coins,setCoins] =React.useState([]);
  React.useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10").
    then((response)=>response.json()).then((json)=>{setCoins(json); setloading(false);});
  },[]);
  // json으로 받아온 데이타 app에서 보여주기 위해서 state으로 나타내고 보여줘야 한다
  return (
    <div className="App">
      <h1>Coins!!!!</h1>
      {loading ? <strong>loading.....</strong> : <select>
        {coins.map((coin)=><option>{coin.name} {coin.symbol} : {coin.quotes.USD.price} USD</option>)}
      </select>  }    
    </div>
  );
}

//map은 함수가 필요하고, value와 index를 넣어줘야 한다, 여기는 코인의 id를 키값으로 사용해서 index가 필요가 없다
//위의 coin은 coins안에 있는 각각의 coin을 의미
export default App;
