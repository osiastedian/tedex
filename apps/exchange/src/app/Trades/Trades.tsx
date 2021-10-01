import styles from './trades.module.scss';

const Trades = () => {
  const sellOrders = Array(18).fill({
    price: 433566.87,
    amount: 1.321123,
    total: 453566.12,
  });
  return (
    <div
      className={`${styles.container} border rounded bg-white shadow-sm overflow-auto pt-2`}
    >
      <ul className="inline-flex w-full px-1 mb-2">
        <li className="px-4 font-semibold text-gray-500 rounded-t opacity-50 text-blue-700">
          <a href="#second">Market Trades</a>
        </li>
        <li className="px-4 text-gray-500 rounded-t opacity-50">
          <a href="#fourth">My Trades</a>
        </li>
      </ul>
      <table className="w-full text-sm">
        <thead>
          <tr className="border text-right">
            <th className="font-normal">Price(TRX)</th>
            <th className="font-normal">Amount(ICX)</th>
            <th className="font-normal pr-2">Total</th>
          </tr>
        </thead>
        <tbody className="overflow-auto">
          {sellOrders.map((order, i) => (
            <tr key={i} className="hover:bg-red-100 text-right cursor-pointer">
              <td
                className={
                  Math.random() > 0.5 ? 'text-red-600' : 'text-green-600'
                }
              >
                {order.price}
              </td>
              <td>{order.amount}</td>
              <td className="pr-2">{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Trades;
