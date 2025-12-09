import { Box } from "./ThemeContextDemo/Box";
import { ThemeContextProvider } from "./ThemeContextDemo/ThemeContext";
import { User } from "./UserContextDemo/User";
import { UserContextProvider } from "./UserContextDemo/UserContext";

function UseContextDemos() {
  return (
    <div>
      <h2> *** UseContext demos ***</h2>
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default UseContextDemos;
