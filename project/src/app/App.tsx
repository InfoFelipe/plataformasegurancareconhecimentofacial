import { BrowserRouter } from "react-router-dom";
import { Rotas } from "./routes";
import { AppThemeProvider } from "./shared/contexts";


export const App = () => {
  return (
    <>
      <AppThemeProvider>
      <BrowserRouter>
        <Rotas/>
      </BrowserRouter>
      </AppThemeProvider>
    </>
  );
}

