import React, { useState, useEffect } from "react";
import { Flag } from "../";
import "./Country.css";

const UserCountry = ({ amount, country, localPrice, parity }) => {
  
  const [purchaseAmount, setPurchaseAmount] = useState(0);

  useEffect(() => {
    if (amount && localPrice) {
      let amt = (parseFloat(amount) < parseFloat(localPrice))
      ? 0
      : Math.round(parseFloat(amount) / parseFloat(localPrice));

      setPurchaseAmount(amt);
    }

  }, [amount, localPrice]);

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
                  <p>Your Dollar Purchasing Parity is { parity.toLocaleString() }.</p>
                </>
            }
          </>
        : <p>Sorry, it looks like there is no country data to display.</p>
      }
    </div>
  );
};

export default UserCountry;