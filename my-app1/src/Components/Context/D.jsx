import {useContext} from 'react'
import { myContext } from './myContext'
import { E } from './E'


export const D = () => {
    // const data = useContext(myContext)
  return (
    <div>
        <h1>D</h1>
        <p></p>
        <E />
    </div>
  )
}