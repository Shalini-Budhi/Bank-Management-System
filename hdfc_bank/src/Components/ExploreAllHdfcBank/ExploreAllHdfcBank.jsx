import React from "react";
import CustomCard from "../CustomCard/CustomCard";
import ExploreCards from "../ExploreCards/ExploreCards";

export default function ExploreAllHdfcBank() {
  const cardsData = [
    {
      header: "Top Online Services",
    },

    {
      header: "Account Services",
    },
    {
      header: "Deposits Services",
    },

    {
      header: "Card Services",
    },
    {
      header: "Loan Services",
    },
  ];
  return (
    <div>
      ExploreAllHdfcBank
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cardsData.map((ele, index) => {
          console.log("ele", ele);
          return (
            <>
              <ExploreCards ele={ele.header} />
            </>
          );
        })}
      </div>
    </div>
  );
}
