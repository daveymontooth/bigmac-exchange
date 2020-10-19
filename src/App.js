import React, { useEffect } from "react";
import config from "./config/";
import { Header } from "./components/";
import { Compare, Home } from "./views/";
import { BigMac, User } from "./store/";
import "./App.css";

const App = () => {

  const bigMacDispatch = React.useContext(BigMac.Dispatch);
  const userDispatch = React.useContext(User.Dispatch);

  /* Fetch our user ip and country */
  useEffect(() => {
    let ip = sessionStorage.getItem("user_ip");
    let country = sessionStorage.getItem("user_country");

    if((!ip || ip === "") || (!country || country === "")) {
      const fetchData = async () => {
        const ipFetch = await fetch(config.urls.ip);
        const ipData = await ipFetch.json();
        
        sessionStorage.setItem("user_ip", ipData.ip);

        const locFetch = await fetch(`${config.urls.location}${ipData.ip}`);
        const locData = await locFetch.json();

        sessionStorage.setItem("user_country", locData.data.country_name);

        userDispatch({ 
          type: "set",
          payload: {
            ip: ipData.ip || "",
            country: locData.data.country_name || ""
          } 
        });
      };
  
      fetchData();
    } else {
      userDispatch({
        type: "set",
        payload: {
          ip,
          country
        }
      });
    }

  }, [userDispatch]);

  /* Fetch our Big Mac data */
  useEffect(() => {
    const big_mac_data = sessionStorage.getItem("big_mac_data");

    if(!big_mac_data || big_mac_data.length === 0) {
      const fetchData = async () => {
        const bigMacFetch = await fetch(config.urls.data);
        const bigMacData = await bigMacFetch.json();

        sessionStorage.setItem("big_mac_data", JSON.stringify(bigMacData.data));

        bigMacDispatch({ 
          type: "set", 
          payload: bigMacData.data || [] 
        });

      };
  
      fetchData();
    } else {
      bigMacDispatch({ 
        type: "set", 
        payload: JSON.parse(big_mac_data) 
      });
    }

  }, [bigMacDispatch]);

  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <Compare />
      </main>
    </div>
  );
}

export default App;
