import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Signin, Login, Dashboard } from "./Components";

import { useState } from "react";

function App() {
  const [islogin, setIslogin] = useState("false");
  const [user, setUser] = useState([
    { username: "admin", password: "123abc" },
  ]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <BrowserRouter>
        <Header islogin={islogin} setIslogin={setIslogin}  />
        <Routes>
          <Route path="signin" element={<Signin props={{user, setUser}} />} />
          <Route
            path="/"
            element={
              <Login
                props={{ user, username, setUsername, password, setPassword }}
                setIslogin={setIslogin}
              />
            }
          />
          <Route
            path="dashboard"
            element={<Dashboard props={{ user, username, password }} />}
          />
          
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
