import React, {useState} from "react";
import App from "./App";
import Random from "./Random"

const CoinCounter = () => {
    // set counter state [heads, tails]
    const [counter, setCounter] = useState([0,0])
    // set coin image state 
    const [isHeads, setIsHeads] = useState()

    // use random number to set heads to true or false
    const FlipCoin = () => {
        if (Random()) {
          // set heads image and increase tails counter
          setIsHeads(true);
          counter[0]++;
          setCounter([...counter])
        } else {
            // set tails image and increase tails counter
            setIsHeads(false);
            counter[1]++;
            setCounter([...counter]);
        }
    }
    // display coin image 
    return (
        <>
            <div>{counter} {isHeads}</div>
        </>
    )
}

export default CoinCounter