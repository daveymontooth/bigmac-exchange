import React, { useEffect, useState } from "react";
import { Amount, BigMac, Router, User } from "../store/";
import { ComparisonCountry, UserCountry } from "../components/";
import "./Compare.css";

const Compare = () => {
  const amountState = React.useContext(Amount.State);
  const bigMacState = React.useContext(BigMac.State);
  const routerState = React.useContext(Router.State);
  const userState = React.useContext(User.State);
  
  const [userCountry, setUserCountry] = useState();
  const [randomCountry, setRandomCountry] = useState();

  useEffect(() => {
    if(userState.user.country !== "" && bigMacState.data.length > 0) {
      const getRandomCountry = (local, all) => {
        let random = all[Math.floor(Math.random() * all.length)];

        return random.country !== local.country ? random : getRandomCountry(local, all);
      };

      const localCountry = bigMacState.data.filter(country => country.country === userState.user.country)[0];
      setUserCountry(localCountry);

      const randomCountry = getRandomCountry(localCountry, bigMacState.data);
      setRandomCountry(randomCountry);
    }
  }, [bigMacState, userState]);

  return (
    /* First country is local, second is random */
    <section className={`compare ${ routerState.route === "compare" ? "active" : "" }`}>
      { 
        userCountry
        ? <UserCountry 
            amount={ amountState.amount } 
            country={ userCountry.country } 
            dollarPrice={ userCountry.dollarPrice } 
            localPrice={ userCountry.localPrice } 
            parity={ userCountry.dollarPPP } 
          />
        : "" 
      }
      {
        randomCountry
        ? <ComparisonCountry 
            amount={ amountState.amount } 
            country={ randomCountry.country } 
            dollarPrice={ randomCountry.dollarPrice }
            localPrice={ randomCountry.localPrice }
            parity={ randomCountry.dollarPPP }
          />
        : ""
      }
    </section>
  );
}

export default Compare;
