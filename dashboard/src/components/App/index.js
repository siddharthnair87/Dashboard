import "./App.css";
import Login from "../Login/index";
import Dashboard from "../Dashboard/index";
import { useLoginContext } from "../../hooks/useLogin";
import { DataProvider } from "../../hooks/useDataContext";
import { useResponsesData } from "../../hooks/useSWR";

function App() {
  const { loggedIn } = useLoginContext();
  const { isLoading } = useResponsesData();
  return (
    <div className="App">
      {!loggedIn && <Login />}
      {loggedIn && !isLoading && (
        <DataProvider>
          <Dashboard />
        </DataProvider>
      )}
    </div>
  );
}

export default App;
