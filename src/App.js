import React from "react";

import { useState } from "react";
import Banner from "./components/Banner";
import InfoBulleHome from "./components/InfoBulle/InfoBulleHome";
import InfoBulleMain from "./components/InfoBulle/InfoBulleMain";
import PostsList from "./components/Post/PostsList";
import Sign from "./components/Profiles/Sign";
import { UserContext } from "./components/UserContext";


function App() {
  const [user, setUser] = useState({
    userName: null,
    id: null,
    isAdmin: false,
    token: null,
    isLogged: false,
  });
  const [userName, setUserName] = useState("");
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Banner userName={userName} setUserName={setUserName} />
        <Sign />
        {user.isLogged
         ? <>
         <PostsList userName={userName} />
         <InfoBulleMain />
         </>
         : <InfoBulleHome />
        }
      </UserContext.Provider>
    </>
  );
}

export default App;
