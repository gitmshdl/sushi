import React from "react";
import AvailableSushis from "./AvailableSushis";
// import classes from "./Sushis.module.css";
import SushiSummary from "./SushiSummary";

export default function Sushis() {
  return (
    <React.Fragment>
      <SushiSummary />
      <AvailableSushis />
    </React.Fragment>
  );
}
