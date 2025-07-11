//import NetflixSeries from "./components/NetflixSeries";
//import "./components/Netflix.css";
//import "./components/Netflix.module.css";
//import { DerivedState } from "./components/DerivedState";
//import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwitch";
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";

import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwitch";


export const App = () => {
  return (
    <section className="container">
      {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
      {/* <NetflixSeries />; */}
      {/* <EventHandling/> */}
      {/* <EventProps /> */}
      {/* <DerivedState/> */}
      <ToggleSwitch/>
    </section>
  );
};
