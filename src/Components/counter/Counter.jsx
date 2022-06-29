import {useState} from 'react'
import Decrement from './Decrement';

import Display from './Display'
import Increment from './Increment';


function Counter (){

    const [number , setNumber] = useState(0);

    function increment(){
        console.log("PRESSED");
        setNumber(number + 1);
    }

    function decrement(){
        if(number != 0){
            setNumber(number - 1)
        } 
    }
    return (
        <div className='center'>
            <Display number = {number}/>
            <Increment add={increment}/>
            <Decrement dec = {decrement}/>
        </div>)
}


export default Counter;