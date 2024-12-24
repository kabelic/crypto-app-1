'use client'
import Coin_convertor from '../components/coin&convertor/page';
import CompareBox from '../components/comparebox/page';
import CoinBoxRow from '../components/coinboxrow/page';
import DayMonthYear from '../components/daymonthyear/page';
import CoinsListBox from '../components/coinslistbox/page';
import { AreaChartComponent } from '../components/linechart/page';
import { BarChartComponent } from '../components/barchart/page';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [records, setRecords] = useState([]);

  const getRecords = async () => {
    const { data } = await axios(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d'
    );
    setRecords(data);
    console.log('Records: ', data);
  };

  useEffect(() => {
    getRecords();
  }, []);
  return (
    <div className="mx-20 pb-4">
      <Coin_convertor />
      <CompareBox />
      <div className="flex flex-row mb-5">
        <CoinBoxRow />
        <CoinBoxRow />
        <CoinBoxRow />
      </div>
      <div className="flex flex-row mb-5">
        <AreaChartComponent />
        <BarChartComponent />
      </div>
      {/* {counter} */}
      <DayMonthYear />
      <div className="flex flex-row justify-between opacity-50 text-xs">
        <div>#</div>
        <div>Name</div>
        <div>Price</div>
        <div>1h%</div>
        <div>24h%</div>
        <div>7d%</div>
        <div>24 volume/Market Cap</div>
        <div>Circulating/Total supply</div>
        <div>Last 7d</div>
      </div>
      <CoinsListBox data={records}/>
    </div>
  );
};

export default Page;
