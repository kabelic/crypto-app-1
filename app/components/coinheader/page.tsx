

const CoinHeader = ({logo, text, number}) => {
    return(
        <div className="flex flex-row justify-center items-center mx-2 text-xs">
            <div className="mx-1">{logo}</div>
           {text?<div className="mx-1">{text}</div>:null} 
            <div className="mx-1">{number}</div> 
        </div>
    )
 }

  export default CoinHeader;