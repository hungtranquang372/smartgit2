import React from 'react'
import{Hung} from '../context'
export default function Test() {

    return (
        <div>
            <Hung>
                {value=>{
                    const {name,vi}=value
                    return `${name}-${vi}`
                }}
            </Hung>
            
        </div>
    )
}
