import Chart from './Chart/Chart';
import Order from './Order/Order';
import OrderBook from './OrderBook/OrderBook';
import Panel from './Panel/Panel';

import styles from './app.module.scss';
import Trades from './Trades/Trades';

export function App() {
  return (
    <div className={styles.container}>
      <div className="border-b p-2 shadow flex">
        <img
          src="https://s2.coinmarketcap.com/static/img/coins/64x64/2099.png"
          alt="icon logo"
        />
        <h1 className="font-bold mx-2 my-auto text-2xl text-gray-700">
          Icon Trade
        </h1>
        <button className="bg-blue-500 border ml-auto px-4 py-0.5 rounded rounded-md text-white border-blue-200">
          Connect
        </button>
      </div>
      <div className={`${styles.exchangeContainer} h-full bg-gray-100 p-3`}>
        <Chart />
        <OrderBook />
        <Panel />
        <Order />
        <Trades />
      </div>
    </div>
  );
}

export default App;
