import '../../globals.css';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';

const CoinBoxRow = ({ data }) => {
  const sliderLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const sliderRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="relative flex items-center">
      <MdChevronLeft className='bg-coinbttnBgColor w-7 h-7 rounded-full cursor-pointer opacity-60 hover:opacity-100' onClick={sliderLeft} size={40} />
      <div
        id="slider"
        className="flex flex-row w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {data.map((record) => {
          return (
            <div className="flex flex-row justify-center items-center bg-searchBgColor px-8 py-2 rounded-md mr-1 hover:bg-coinbttnBgColor">
              <img className="w-6 h-6" src={`${record.image}`} />
              <div className="ml-3 text-xs">
                <div>{`${record.name}(${record.symbol.toUpperCase()})`}</div>
                <div className="flex flex-row">
                  <div>price</div>
                  <div className="flex flex-row justify-center items-center">
                    <div>
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.80013 9.66699L12.1335 6.33366L5.4668 6.33366L8.80013 9.66699Z"
                          fill="#FE2264"
                        />
                      </svg>
                    </div>
                    <div>number</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <MdChevronRight className='bg-coinbttnBgColor w-7 h-7 rounded-full cursor-pointer opacity-60 hover:opacity-100' onClick={sliderRight} size={40} />
    </div>
  );
};

export default CoinBoxRow;
