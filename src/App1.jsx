import React, { createContext } from "react";
import ComA from "./ComA";

const FirstName = createContext();
const LastName = createContext();

const App1 = () => {
  return (
    <>
      <FirstName.Provider value={"Dipesh  Panjiyar"}>
        <LastName.Provider value={"Tharu"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default App1;
export { FirstName, LastName };
