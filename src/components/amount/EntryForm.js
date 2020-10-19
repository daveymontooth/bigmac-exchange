import React, { useEffect, useRef, useState } from "react";
import { Amount, Router } from "../../store/";
import "../shared/Shared.css";

const EntryForm = () => {
  const amountDispatch = React.useContext(Amount.Dispatch);
  const routerDispatch = React.useContext(Router.Dispatch);

  const [amount, setAmount] = useState();
  const [disabled, setDisabled] = useState(true);

  const firstRender = useRef(true);

  useEffect(() => {
    
    /* If this is the first render, skip validation */
    if(firstRender.current) {
      firstRender.current = false;
      return;
    }

    /* Run our validation */
    setDisabled(Number.isNaN(Number.parseFloat(amount)));

  }, [amount]);

  const handleAmount = (amt) => {
    setAmount(amt);
    amountDispatch({
      type: "set",
      payload: amt
    });
  };

  const handleRoute = (route) => {
    /* This is a bit of overkill */
    routerDispatch({
      type: "route",
      payload: route
    });
  };


  return (
    <form>
      <div className="field">
        <label htmlFor="amount">
          Enter a dollar amount <small>(in your local currency)</small> and we'll show you.
        </label>
        <input 
          type="number"
          placeholder="10.00"
          name="amount"
          onChange={ e => handleAmount(e.target.value) }
        />
        { (amount && disabled) && <span className="field_validation-error">Sorry, looks like that isn't a valid amount.</span> }
      </div>
      <div className="action">
        <button 
            disabled={ disabled } 
            type="button"
            onClick={ e => { e.preventDefault(); handleRoute("compare") } }
          >
          Show me how many Big Macs I can get
        </button>
      </div>
    </form>
  );
};

export default EntryForm;