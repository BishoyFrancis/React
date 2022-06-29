import { increment } from "./Counter";


function Increment(props){
    return (
        <button className="btn btn-success mx-4 my-3" onClick={props.add}>Increment</button>
    )
}

export default Increment;