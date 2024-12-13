import '../../globals.css';

const DayMonthYear = () => {
    return(
        <div className='flex flex-row bg-searchBgColor w-fit rounded-md text-xs opacity-50 mb-20'>
            <div className='px-4 py-2'>1D</div>
            <div className='px-4 py-2'>7D</div>
            <div className='px-4 py-2'>14D</div>
            <div className='px-4 py-2'>1M</div>
            <div className='px-4 py-2'>1W</div>
            <div className='px-4 py-2'>1Y</div>
            <div className='px-4 py-2'>5Y</div>
        </div>
    )
}

export default DayMonthYear