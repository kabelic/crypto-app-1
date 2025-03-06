import '../../globals.css';
import ListCoinAreaChart from '../listcoinsAreachart/page';

const CoinsListBox = ({ data }) => {
  return (
    <div>
      {data.map((record, index) => {
        return (
          <div className="flex flex-row justify-between items-center bg-searchBgColor mt-5 rounded-lg py-3 px-5 text-xs">
            <div>{index + 1}</div>
            <div className="flex flex-row justify-between items-center">
              <div className="mr-3">
                <img className="w-6 h-6" src={`${record.image}`} />
              </div>
              <div>{`${record.name}(${record.symbol.toUpperCase()})`}</div>
            </div>
            <div>${record.current_price}</div>
            <div className="flex flex-row justify-center items-center ">
              <div>
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.00065 0.833008L0.667318 4.16634H7.33398L4.00065 0.833008Z"
                    fill="#01F1E3"
                  />
                </svg>
              </div>
              <div>2.35%</div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <div>
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.00065 0.833008L0.667318 4.16634H7.33398L4.00065 0.833008Z"
                    fill="#01F1E3"
                  />
                </svg>
              </div>
              <div>11.04%</div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <div>
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.00065 0.833008L0.667318 4.16634H7.33398L4.00065 0.833008Z"
                    fill="#01F1E3"
                  />
                </svg>
              </div>
              <div>8.41%</div>
            </div>
            <div>
              <div>
                <div className="flex flex-row ">
                  <div className="flex flex-row">
                    <div>.</div>
                    <div>$3.75B</div>
                  </div>
                  <div className="flex flex-row ml-5">
                    <div>.</div>
                    <div>$8.24B</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="h-2 w-full bg-progressbarBgColor rounded-md ">
                  <div
                    className="h-2 bg-white rounded-md"
                    style={{ width: '20%' }}
                  ></div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="flex flex-row text-xs">
                  <div className="flex flex-row">
                    <div>.</div>
                    <div>$3.75B</div>
                  </div>
                  <div className="flex flex-row ml-5">
                    <div>.</div>
                    <div>$8.24B</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="h-2 w-full bg-progressbarBgColor rounded-md ">
                  <div
                    className="h-2 bg-white rounded-md"
                    style={{ width: '20%' }}
                  ></div>
                </div>
              </div>
            </div>
            <div><ListCoinAreaChart/></div>
          </div>
        );
      })}
    </div>
  );
};

export default CoinsListBox;
