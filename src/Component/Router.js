import SignIn from "./Auth/Signin";
import SignUp from "./Auth/Signup";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


export default function Router(props) {
  const { isLoggedIn, setLoggedIn } = props;
  return (
    <div>
      <BrowserRouter>
        {isLoggedIn ?
          <Routes>
            <Route path="/login" element={setLoggedIn = { setLoggedIn }}>
            </Route>
            <Route path="/:id" element={{ setLoggedIn }}>
            </Route>
          </Routes>
          :
          <Routes>
            <Route path="/" element={<SignIn setIsLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />}>
            </Route>
            <Route path="/user" element={<SignUp setIsLoggedIn={setLoggedIn} />}>
            </Route>
          </Routes>
        }
      </BrowserRouter>
    </div>
  );
}