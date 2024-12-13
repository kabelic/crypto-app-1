import Link from 'next/link'

const PortfolioButton = () => {
    return(
        <div className="flex flex-row justify-center items-center text-sx ml-5">
            <div>
            <svg width="15" height="15" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5 11L10.5 17L1.5 11M19.5 15L10.5 21L1.5 15M19.5 7L10.5 13L1.5 7L10.5 1L19.5 7Z" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div className="mx-1 text-xs opacity-50">
<Link href="/portfolio">Portfolio </Link>
</div>
        </div>
    )
}

export default PortfolioButton