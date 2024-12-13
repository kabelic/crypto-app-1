import Coin_convertor from "../components/coin&convertor/page";
import CompareBox from "../components/comparebox/page";
import CoinBoxRow from "../components/coinboxrow/page";
import DayMonthYear from "../components/daymonthyear/page";
import CoinsListBox from "../components/coinslistbox/page";

const Page = () => {
    return(
        <div className="mx-20">
            <Coin_convertor/>
            <CompareBox/>
            <div className="flex flex-row mb-5">
            <CoinBoxRow/>
            <CoinBoxRow/>
            <CoinBoxRow/>
            </div>
            <DayMonthYear/>
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
        
        </div>
    )
}

export default Page;