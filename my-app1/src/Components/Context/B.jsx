import {useContext} from 'react'
import { C } from './C'
import { myContext1 } from './myContext'


export const B = () => {
    // const data = useContext(myContext1)
  return (
    <div>
    <h1>B</h1>
    <div></div>
        <C />
    </div>
  )
}