import Chart from './Chart/Chart';
import Order from './Order/Order';
import OrderBook from './OrderBook/OrderBook';
import Panel from './Panel/Panel';

import styles from './app.module.scss';

export function App() {
  return (
    <div className={`${styles.container} h-full bg-gray-100 p-4`}>
      <Chart />
      <OrderBook />
      <Panel />
      <Order />
    </div>
  );
}

export default App;
