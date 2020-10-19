import React, { useEffect, useState } from "react";
import { Router, User } from "../store/";
import { EntryForm, Flag, Loader } from "../components/";
import "./Home.css";

const Home = () => {
  const routerState = React.useContext(Router.State);
  const userState = React.useContext(User.State);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userState.user.ip && setLoading(false);
  }, [userState, userState.user.ip]);

  return (
    <section className={`home ${ routerState.route === "home" ? "active" : "" }`}>
      { 
        loading
        ? <Loader message="Trying to find your location..." />
        : <div>
            <Flag country={userState.user.country} />
            <h2>Hello in { userState.user.country }!</h2>
            <h3>Wanna know how many Big Macs you can buy there?</h3>
            <EntryForm />
          </div>
      }
    </section>
  );
}

export default Home;
