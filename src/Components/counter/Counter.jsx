import {useState} from 'react'
import Decrement from './Decrement';

import Display from './Display'
import Increment from './Increment';
import {useDispatch , useSelector} from "react-redux"

import {incrementCounterSliceAction} from '../redux/features/CounterSlice'
import {decrementCounterSliceAction} from '../redux/features/CounterSlice'


function Counter (){
    const dispatch = useDispatch();
    const [number , setNumber] = useState(0);
    const count = useSelector((state) => state.counter.counter)

    function increment(){
        // console.log("PRESSED");
        // setNumber(number + 1);
        dispatch(incrementCounterSliceAction())
    }

    function decrement(){
        if(count != 0){
            // setNumber(number - 1)
            dispatch(decrementCounterSliceAction())
        } 
    }
    return (
        <div className='center'>
            <Display number = {count}/>
            <Increment add={increment}/>
            <Decrement dec = {decrement}/>
        </div>)
}


export default Counter;