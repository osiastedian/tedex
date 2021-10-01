import styles from './order.module.scss';

interface IOrderInput {
  htmlFor: string;
  label: string;
  value: number;
  currency: string;
  onValueChange: (value: number) => void;
}

const OrderInput: React.FC<IOrderInput> = ({
  currency,
  htmlFor,
  label,
  onValueChange,
  value,
}) => {
  return (
    <div
      className={`${styles.orderInput} border border-gray-300 flex mt-1 px-2 rounded-md shadow-sm`}
    >
      <label className="my-auto text-gray-400 text-sm" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        type="number"
        value={value}
        name={htmlFor}
        className="border-none mx-2 w-full  text-right"
      />
      <span className="my-auto text-gray-400  text-sm">{currency}</span>
    </div>
  );
};

const Order = () => {
  return (
    <div className={`${styles.container} bg-white rounded p-2`}>
      <ul className="inline-flex w-full px-1 mb-1">
        <li className="px-4 -mb-px font-semibold text-gray-800 text-blue-700 rounded-t opacity-50">
          <a id="default-tab" href="#first">
            Spot
          </a>
        </li>
        <li className="px-4  text-gray-500 rounded-t opacity-50">
          <a href="#second">Market</a>
        </li>
        <li className="px-4 text-gray-500 rounded-t opacity-50">
          <a href="#fourth">Funds</a>
        </li>
      </ul>
      <div className="flex">
        <div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>Available:</span>
            <span>1000.00</span>
          </div>
          <OrderInput
            currency="TRX"
            htmlFor="buyPrice"
            label="Price"
            value={0}
            onValueChange={(value) => {
              console.log({ value });
            }}
          />
          <OrderInput
            currency="ICX"
            htmlFor="buyAmount"
            label="Amount"
            value={0}
            onValueChange={(value) => {
              console.log({ value });
            }}
          />
          <hr className="my-2" />
          <OrderInput
            currency="ICX"
            htmlFor="buyTotal"
            label="Total"
            value={0}
            onValueChange={(value) => {
              console.log({ value });
            }}
          />

          <button className="bg-green-400 font-semibold hover:bg-green-700 mt-2 p-2 rounded text-white w-full">
            BUY
          </button>
        </div>
        <div className="ml-4">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Available:</span>
            <span>1000.00</span>
          </div>
          <OrderInput
            currency="TRX"
            htmlFor="buyPrice"
            label="Price"
            value={0}
            onValueChange={(value) => {
              console.log({ value });
            }}
          />
          <OrderInput
            currency="ICX"
            htmlFor="buyAmount"
            label="Amount"
            value={0}
            onValueChange={(value) => {
              console.log({ value });
            }}
          />
          <hr className="my-2" />
          <OrderInput
            currency="ICX"
            htmlFor="buyTotal"
            label="Total"
            value={0}
            onValueChange={(value) => {
              console.log({ value });
            }}
          />

          <button className="bg-red-400 font-semibold hover:bg-red-500 mt-2 p-2 rounded text-white w-full">
            SELL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
