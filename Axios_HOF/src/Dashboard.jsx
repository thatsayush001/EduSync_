import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import FAQ from "./scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import Displayer from "./scenes/displayer";
import gitDisplayer from "./scenes/gitdisplayer";
// import Calendare from "./scenes/calendar/calendar";

function Dashboard() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  useEffect(() => {
    // Displayer();
    gitDisplayer();

  }, [isSidebar])

  return (
    <div>

      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            {/* <Sidebar isSidebar={isSidebar} /> */}
            <main className="dashboard--content">
              <Topbar setIsSidebar={setIsSidebar} />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default Dashboard;
