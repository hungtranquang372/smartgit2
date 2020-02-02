// import React from 'react'
// import{Hung} from '../context'
// export default function Test() {

//     return (
//         <div>
//             <Hung>
//                 {value=>{
//                     const {name,vi}=value
//                     return `${name}-${vi}`
//                 }}
//             </Hung>
            
//         </div>
//     )
// }
import React, { Component } from 'react'
import {Hung} from '../context'
export default class Test extends Component {
    render() {
        return (
            <div>
                <Hung>
                    {
                        value=>{
                            const {name,vi}=value
                            return `${vi}-${name}`
                        }
                    }
                </Hung>
            </div>
        )
    }
}
