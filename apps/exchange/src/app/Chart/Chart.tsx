import styles from './Chart.module.scss';

const Chart = () => {
  return (
    <div className={`${styles.chart} rounded shadow`}>
      <img
        className="h-full rounded md"
        src="https://s3.tradingview.com/snapshots/t/TgJTBEBl.png"
        alt="trading view figure"
      ></img>
    </div>
  );
};

export default Chart;
