import styles from './panel.module.scss';
const Panel = () => {
  return (
    <div className={`${styles.container} bg-white rounded`}>
      <ul className="inline-flex w-full px-1 pt-2 ">
        <li className="px-4 -mb-px font-semibold text-gray-800 text-blue-700 rounded-t opacity-50">
          <a id="default-tab" href="#first">
            Open Trades
          </a>
        </li>
        <li className="px-4  text-gray-500 rounded-t opacity-50">
          <a href="#second">Order History</a>
        </li>
        <li className="px-4  text-gray-500 rounded-t opacity-50">
          <a href="#third">Trade History</a>
        </li>
        <li className="px-4 text-gray-500 rounded-t opacity-50">
          <a href="#fourth">Funds</a>
        </li>
      </ul>
      <table className="w-full text-sm mt-2">
        <thead>
          <tr className="border-b">
            <th className="font-normal">Date</th>
            <th className="font-normal">Pair</th>
            <th className="font-normal">Type</th>
            <th className="font-normal">Side</th>
            <th className="font-normal">Price</th>
            <th className="font-normal">Executed</th>
            <th className="font-normal">Amount</th>
            <th className="font-normal">Total</th>
          </tr>
        </thead>
        <tbody className="overflow-auto">
          <tr className="font-semibold hover:bg-gray-100 text-center text-sm">
            <td className="py-1 border-b text-gray-700">09-30 21:04:15</td>
            <td className="py-1 border-b text-gray-700">TRX/ICX</td>
            <td className="py-1 border-b text-gray-700">Limit</td>
            <td className="py-1 border-b text-gray-700">Side</td>
            <td className="py-1 border-b text-red-700">Sell</td>
            <td className="py-1 border-b text-gray-700">0.08827</td>
            <td className="py-1 border-b text-gray-700">0.08827</td>
            <td className="py-1 border-b text-gray-700">353.000000</td>
          </tr>
          <tr className="font-semibold hover:bg-gray-100 text-center text-sm">
            <td className="py-1 border-b text-gray-700">09-30 21:04:15</td>
            <td className="py-1 border-b text-gray-700">TRX/ICX</td>
            <td className="py-1 border-b text-gray-700">Limit</td>
            <td className="py-1 border-b text-gray-700">Side</td>
            <td className="py-1 border-b text-red-700">Sell</td>
            <td className="py-1 border-b text-gray-700">0.08827</td>
            <td className="py-1 border-b text-gray-700">0.08827</td>
            <td className="py-1 border-b text-gray-700">353.000000</td>
          </tr>
          <tr className="font-semibold hover:bg-gray-100 text-center text-sm">
            <td className="py-1 border-b text-gray-700">09-30 21:04:15</td>
            <td className="py-1 border-b text-gray-700">TRX/ICX</td>
            <td className="py-1 border-b text-gray-700">Limit</td>
            <td className="py-1 border-b text-gray-700">Side</td>
            <td className="py-1 border-b text-red-700">Sell</td>
            <td className="py-1 border-b text-gray-700">0.08827</td>
            <td className="py-1 border-b text-gray-700">0.08827</td>
            <td className="py-1 border-b text-gray-700">353.000000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Panel;
