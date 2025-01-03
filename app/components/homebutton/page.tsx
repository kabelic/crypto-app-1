import Link from 'next/link'

const HomeButton = () => {
    return(
        <div className="flex flex-row justify-center items-center">
            <div><svg width="15" height="15" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5402 4.81969L12.7802 0.789694C11.2102 -0.310306 8.80023 -0.250306 7.29023 0.919694L2.28023 4.82969C1.28023 5.60969 0.490234 7.20969 0.490234 8.46969V15.3697C0.490234 17.9197 2.56023 19.9997 5.11023 19.9997H15.8902C18.4402 19.9997 20.5102 17.9297 20.5102 15.3797V8.59969C20.5102 7.24969 19.6402 5.58969 18.5402 4.81969ZM11.2502 15.9997C11.2502 16.4097 10.9102 16.7497 10.5002 16.7497C10.0902 16.7497 9.75023 16.4097 9.75023 15.9997V12.9997C9.75023 12.5897 10.0902 12.2497 10.5002 12.2497C10.9102 12.2497 11.2502 12.5897 11.2502 12.9997V15.9997Z" fill="white"/>
</svg>

</div>
<div className="mx-1 text-xs">
<Link href="/home">Home </Link>
</div>
        </div>
    )
}

export default HomeButton