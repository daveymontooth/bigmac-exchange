import React, { useState, useEffect } from "react";
import { Flag } from "../";
import "./Country.css";

const ComparisonCountry = ({ amount, country, dollarPrice, localPrice }) => {
  
  const [worth, setWorth] = useState(0);
  const [purchaseAmount, setPurchaseAmount] = useState(0);

  useEffect(() => {
    if (amount && dollarPrice && localPrice) {
      let amt = Math.round((parseFloat(amount) / parseFloat(localPrice)) * (parseFloat(localPrice) / parseFloat(dollarPrice)));
      setPurchaseAmount(amt);

      setWorth(parseFloat(amount) * (parseFloat(localPrice) / parseFloat(dollarPrice)));
    }
  }, [amount, dollarPrice, localPrice]);

  return (
    <div className="card-country">
      { country !== ""
        ?
          <>
            <Flag country={ country } />
            {
              !amount 
              ? <p>Uh oh, it looks like we're missing a dollar amount.</p>
              : <>
                  <h1>${ amount }</h1>
                  <h3>Gets you <em>{ purchaseAmount === 1 ? "1 Big Mac" : `${purchaseAmount} Big Macs` }</em> in { country }</h3>
                  <p>Your ${ amount } is worth about { worth.toFixed(2) } in { country }.</p>
                </>
            }
          </>
        : <p>Sorry, it looks like there is no country data to display.</p>
      }
    </div>
  );
};

export default ComparisonCountry;