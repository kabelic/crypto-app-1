import '../../globals.css';

const CoinsListBox = () => {
    return(
        <div className='flex flex-row justify-between items-center bg-searchBgColor mt-5 rounded-lg py-3 px-5'>
            <div>1</div>
            <div className='flex flex-row justify-between items-center'>
                <div className='mr-3'>
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_587_8933)">
                                <path d="M32 16.5C32 19.6645 31.0616 22.7579 29.3035 25.3891C27.5454 28.0203 25.0466 30.0711 22.1229 31.2821C19.1993 32.4931 15.9823 32.8099 12.8786 32.1926C9.77487 31.5752 6.92394 30.0514 4.6863 27.8137C2.44866 25.5761 0.924806 22.7251 0.307443 19.6214C-0.309921 16.5177 0.00693248 13.3007 1.21793 10.3771C2.42894 7.45345 4.4797 4.95459 7.11088 3.19649C9.74207 1.43838 12.8355 0.5 16 0.5C20.2435 0.5 24.3131 2.18571 27.3137 5.18629C30.3143 8.18687 32 12.2565 32 16.5Z" fill="#F7931A"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.371 7.80608L15.0481 8.79081L15.8699 5.72754L17.7084 6.22645L16.9186 9.16318L18.4183 9.56608L19.2095 6.59736L21.0801 7.09772L20.2743 10.0824C20.2743 10.0824 23.3288 10.7588 24.0473 13.2432C24.7659 15.7275 22.4677 17.0323 21.7579 17.0817C21.7579 17.0817 24.4343 18.5494 23.515 21.4366C22.5957 24.3239 19.7739 24.8403 16.8052 24.1784L15.9993 27.2737L14.1288 26.7734L14.9506 23.7261L13.467 23.3217L12.6452 26.3908L10.7892 25.8919L11.6124 22.8374L7.83789 21.8192L8.78916 19.7072C8.78916 19.7072 9.85389 19.9981 10.2568 20.0941C10.6597 20.1901 10.9186 19.7712 11.0321 19.3523C11.1455 18.9334 12.8546 11.9908 13.0161 11.4192C13.1775 10.8475 13.1121 10.401 12.4343 10.225C11.7564 10.049 10.8343 9.77408 10.8343 9.77408L11.371 7.80608ZM15.0801 17.0003L14.0619 21.0483C14.0619 21.0483 19.1106 22.8708 19.7564 20.3064C20.4023 17.7421 15.0801 17.0003 15.0801 17.0003ZM15.5484 15.0803L16.5477 11.3712C16.5477 11.3712 20.8706 12.145 20.3383 14.209C19.8059 16.273 17.2575 15.4817 15.5484 15.0803Z" fill="white" />
                                </g>
                                <defs>
                                <clipPath id="clip0_587_8933">
                                <rect width="32" height="32" fill="white" transform="translate(0 0.5)"/>
                                </clipPath>
                                </defs>
                    </svg>
                </div>
                <div>Bitcoin(BTC)</div>
            </div>
            <div >$29,850</div>
            <div className="flex flex-row justify-center items-center ">
                <div>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.00065 0.833008L0.667318 4.16634H7.33398L4.00065 0.833008Z" fill="#01F1E3"/>
                    </svg>
                </div>
                <div>2.35%</div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.00065 0.833008L0.667318 4.16634H7.33398L4.00065 0.833008Z" fill="#01F1E3"/>
                    </svg>
                </div>
                <div>11.04%</div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.00065 0.833008L0.667318 4.16634H7.33398L4.00065 0.833008Z" fill="#01F1E3"/>
                    </svg>
                </div>
                <div>8.41%</div>
            </div>
            <div>
                <div>
                    <div className='flex flex-row '>
                        <div className='flex flex-row'>
                            <div>.</div>
                            <div>$3.75B</div>
                        </div>
                        <div className='flex flex-row ml-5'>
                            <div>.</div>
                            <div>$8.24B</div>
                        </div>
                    </div>
                </div>
                <div>
                <div className="h-2 w-full bg-progressbarBgColor rounded-md ">
                    <div
                        className="h-2 bg-white rounded-md"
                        style={{width:'20%'}}
                    ></div>
                </div>
                </div>
            </div>
            <div>
            <div>
                    <div className='flex flex-row text-xs'>
                        <div className='flex flex-row'>
                            <div>.</div>
                            <div>$3.75B</div>
                        </div>
                        <div className='flex flex-row ml-5'>
                            <div>.</div>
                            <div>$8.24B</div>
                        </div>
                    </div>
                </div>
                <div>
                    
                <div className="h-2 w-full bg-progressbarBgColor rounded-md ">
                    <div
                        className="h-2 bg-white rounded-md"
                        style={{width:'20%'}}
                    ></div>
                </div>

                </div>
            </div>
            <div></div>
        </div>
    )
}

export default CoinsListBox;