'use client'
import Link from 'next/link'
import { useState } from 'react';


export default function Navbar() {
    const [cities, setCities] = useState(['paris','london'])
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const hangleSubmit = (e) => {
        e.preventDefault()
        setCities([...cities, value])
        setValue("");
    }
  return (
    <div>
        <form onSubmit={hangleSubmit}>
            <input onChange={handleChange} style={{color: 'black'}} value={value}/>
        </form>
         <ul>
            
            {cities.map((city) => {
                return(<li key={city}>
                    <Link href={`/city/${city}`}>{city.toLocaleUpperCase()}</Link>
                </li>)
                
            })}
            
        

    </ul>
    </div>
       
  );
}
