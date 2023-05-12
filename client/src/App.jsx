import Register from "./components/Register";
import { UserContextProvider } from "./context/userContext";

const App = () => {
  return (
    <UserContextProvider>
      <Register />
    </UserContextProvider>
  );
};

export default App;
