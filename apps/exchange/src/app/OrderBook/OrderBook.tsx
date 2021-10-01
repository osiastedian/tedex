import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/solid';
import styles from './OrderBook.module.scss';
const OrderBook = () => {
  const sellOrders = Array(9).fill({
    price: 433566.87,
    amount: 1.321123,
    total: 453566.12,
  });
  return (
    <div className={`${styles.orderbook} bg-white border shadow-sm overflow-auto rounded`}>
      <h4 className="font-semibold text-gray-700 p-2">Order Book</h4>
      <table className="w-full text-right border-t text-sm">
        <thead>
          <tr className="border-b">
            <th className="font-normal">Price(TRX)</th>
            <th className="font-normal">Amount(ICX)</th>
            <th className="font-normal pr-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {sellOrders.map((order, i) => (
            <tr key={i} className="hover:bg-red-100  cursor-pointer">
              <td className="text-red-600">{order.price}</td>
              <td>{order.amount}</td>
              <td className="pr-2">{order.total}</td>
            </tr>
          ))}
          <tr className="border-t border-b">
            <td colSpan={3} className="text-left">
              <div className="flex">
                <span className="font-bold mx-2 text-2xl text-green-600">
                  43,572.18
                  <ArrowUpIcon height={20} className="inline" />
                </span>
                <span className="text-gray-600 text-sm my-auto">
                  $43,572.18
                </span>
              </div>
            </td>
          </tr>
          {sellOrders.map((order, i) => (
            <tr key={i} className="hover:bg-green-100 cursor-pointer">
              <td className="text-green-600">{order.price}</td>
              <td>{order.amount}</td>
              <td className="pr-2">{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderBook;
