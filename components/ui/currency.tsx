'use client'

import { useEffect, useState } from "react"

export const formatter=new Intl.NumberFormat("en-US",{
    style:'currency',
    currency:'USD'
  })

  interface CurrencyProps{
    value:string | number
  }
const Currency:React.FC<CurrencyProps>=({value})=>{
    const [mounted,setMounted]=useState(false)
    useEffect(()=>{
        setMounted(true)
    },[])

    if(!mounted)return null
    return(
        <div className="font-semi-bold">
            {formatter.format(Number(value))}
        </div>
    )
}

export default Currency