import TablePage from "./pages/TablePage";
import Navbar from "./components/Navbar";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar />
        <TablePage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
