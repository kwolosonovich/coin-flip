import React, {useState} from "react";
import App from "./App";
import Random from "./Random"
import './CoinCounter.css' 

// image source
let srcJpg = "https://static.thenounproject.com/png/98997-200.png";

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
          srcJpg = "https://2.bp.blogspot.com/-leqw-ggDo2E/W3km7SLGpxI/AAAAAAAAAMY/kKtdRLsT5mkUK2DRc1bme852a6WGLGC7QCLcBGAs/s400/dime-heads.jpg";
                    console.log(srcJpg);

        } else {
            // set tails image and increase tails counter
            setIsHeads(false);
            counter[1]++;
            setCounter([...counter]);
            srcJpg = "https://1.bp.blogspot.com/-axMqjO2fmug/W3km7ydbocI/AAAAAAAAAMg/VFmL2acMhAYyIillBSmo_KPr4rFMrIkUQCLcBGAs/s400/dime-tails.jpg";
        }
    }

    // display coin image 
    return (
      <>
        <button onClick={FlipCoin}>Flip Coin</button>
        <img className="coin" src={srcJpg} alt="coin" />

        <div className="score">
          You've flipped <b>{counter[0] + counter[1]}</b> times, with{" "}
          <b>{counter[0]}</b>
          heads and <b>{counter[1]}</b> tails!
        </div>
      </>
    );
}

export default CoinCounter; 