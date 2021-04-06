import React from "react";
import { FirstName } from "./App1";
import { LastName } from "./App1";

const ComC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <h1>
                    My name is {fname} {lname}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
      ;
    </>
  );
};

export default ComC;
