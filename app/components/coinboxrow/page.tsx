import '../../globals.css';


const CoinBoxRow = () => {
    return(
        <div className="flex flex-row justify-center items-center bg-searchBgColor w-fit px-5 py-2 rounded-md mr-1">
            <div><svg width="30" height="30" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_587_8875)">
<circle cx="16.8008" cy="16" r="16" fill="#627EEA" />
<path d="M16.7116 4.15918L16.5527 4.69887V20.358L16.7116 20.5166L23.9803 16.22L16.7116 4.15918Z" fill="#C0CBF6" />
<path d="M16.7103 4.15918L9.44141 16.22L16.7103 20.5166V12.916V4.15918Z" fill="white"/>
<path d="M16.7126 21.89L16.623 21.9992V27.5773L16.7126 27.8387L23.9857 17.5957L16.7126 21.89Z" fill="#C0CBF6" />
<path d="M16.7103 27.8387V21.89L9.44141 17.5957L16.7103 27.8387Z" fill="white" />
<path d="M16.709 20.5195L23.9777 16.2229L16.709 12.9189V20.5195Z" fill="#8197EE" />
<path d="M9.44141 16.2229L16.7103 20.5195V12.9189L9.44141 16.2229Z" fill="#C0CBF6" />
</g>
<defs>
<clipPath id="clip0_587_8875">
<rect width="32" height="32" fill="white"  transform="translate(0.800781)"/>
</clipPath>
</defs>
</svg>
</div>
            <div className='ml-3'>
                <div>title</div>
                <div className='flex flex-row'>
                    <div>price</div>
                    <div className="flex flex-row justify-center items-center">
                        <div><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.80013 9.66699L12.1335 6.33366L5.4668 6.33366L8.80013 9.66699Z" fill="#FE2264" />
</svg>
</div>
                        <div>number</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoinBoxRow;