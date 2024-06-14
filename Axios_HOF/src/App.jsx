import React, {useState} from "react";
import './App.css'
import AlumniApp from "./AlumniApp";
import Background from "./components/HomePage/Backround3JS/Background";
import { Hero } from "./components/HomePage/HeroSection/Hero";
import { CardList } from "./components/HomePage/Card/CardList";
import Footer from "./components/HomePage/Footer/Footer";
import NavbarHome from "./components/HomePage/HomeNavbar/NavbarHome";
import TechEvents from "./components/TechEventsPage/TechEvents";
import { Navbar } from "./components/AlumniPage";
import LoginForm from "./components/LoginPage/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ContactUs from "./components/ContactUs/ContactUs";
import Dashboard from "./Dashboard";
import Cp from "./scenes/cp/index";
import AppDev from "./scenes/appdev";
import WebDev from "./scenes/webdev";
import Ml from "./scenes/ml";
import Foss from "./scenes/foss";
import Design from "./scenes/design";
import Blockchain from "./scenes/blockchain";
import InfoSec from "./scenes/infosec";
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import Displayer from "./scenes/displayer";
import gitDisplayer from "./scenes/gitdisplayer";
import './Dashboard.css'
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import Calendare from "./scenes/calendar/calendar";
import Gallery from "./components/Gallery/Gallery";
import Crotonia from "./components/Clubs/Crotonia";
import Zephyr from "./components/Clubs/Zephyr";
import Estrella from "./components/Clubs/Estrella";
import Goonj from "./components/Clubs/Goonj";
import AfterDark from "./components/Clubs/AfterDark";
import Utkrisht from "./components/Clubs/Utkrisht";
import Users from "./components/Users/Users";
import FormNew from "./components/Form/FormNew";
import ForgotPass from "./components/LoginPage/ForgotPass";
import FullScreenDialog from "./components/FullScreenDialog/FullScreenDialog";
import NoMatch from "./components/NoMatch/NoMatch";
import AboutUs from "./components/AboutUs/AboutUs";
import NavLatest from "./components/HomePage/HomeNavbar/NavLatest";
import StudentCalendar from "./scenes/calendar/studentCalendar";
// import Calendar from "./scenes/calendar/calendar";
import { checkerMj } from "./components/LoginPage/LoginForm";
import StudentFAQ from "./scenes/faq/StudentFaq";
import StudentBlockchain from "./scenes/blockchain/StudentBlockchain";
import StudentApp from "./scenes/appdev/StudentApp";
import StudentWebDev from "./scenes/webdev/StudentWebDev";
import StudentML from "./scenes/ml/StudentML";
import StudentFoss from "./scenes/foss/StudentFoss";
import StudentDesign from "./scenes/design/StudentDesign";
import StudentInfosec from "./scenes/infosec/StudentInfosec";
import HomeApp from "./src/App";



const App = () => {
  const [theme, colorMode] = useMode();
  let data = localStorage.getItem("loginMode");
  const [checker,setChecker] = useState(data)
  console.log(data);
  function handleCheckerIncrement(){
    let data = localStorage.getItem("loginMode");
    setChecker(data);
  }

  const newToken = sessionStorage.getItem("JWT")
  // const [isSidebar, setIsSidebar]=useState(true);
  // useEffect(()=>{
  //   Displayer(); 
  //   gitDisplayer(); 
  
  // const loginModeFinal = JSON.parse(data);
  // const userName = dashboardNameFinal.dashboardName;
  // },[])
  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
            <NavLatest />
            <HomeApp/>
            
            
          </>} />
          {/* <Route path="/dashboard" element={<><Dashboard /></>}> </Route> */}
          <Route path="/alumni_app" element={<><NavLatest /><AlumniApp /></>}> </Route>
          <Route path="/tech_events" element={<><NavLatest /><TechEvents /></>}> </Route>
          <Route path="/gallery" element={<><NavLatest /><Gallery /></>}> </Route>
          <Route path="/gallery/crotonia" element={<><NavLatest /><Crotonia /></>}> </Route>
          <Route path="/gallery/zephyr" element={<><NavLatest /><Zephyr /></>}> </Route>
          <Route path="/gallery/estrella" element={<><NavLatest /><Estrella /></>}> </Route>
          <Route path="/gallery/goonj" element={<><NavLatest /><Goonj /></>}> </Route>
          <Route path="/gallery/afterdark" element={<><NavLatest /><AfterDark /></>}> </Route>
          <Route path="/gallery/utkrisht" element={<><NavLatest /><Utkrisht /></>}> </Route>
          <Route path="/users" element={<><NavLatest /><Users /></>}> </Route>
          <Route path="/about_us" element={<><NavLatest /><AboutUs /></>}> </Route>
          <Route path="/contact_us" element={<><NavLatest /><ContactUs /></>}> </Route>
          <Route path="/login_signup" element={<><NavLatest /><Background /><LoginForm checker={checker} increment={handleCheckerIncrement} /></>}> </Route>
          <Route path="/forgotpass" element={<><NavLatest /><Background /><ForgotPass /></>}> </Route>
          <Route path="/fullsc" element={<><FullScreenDialog /></>}> </Route>
          <Route path="*" element={<NoMatch />}></Route>
          {/* </Routes> */}

          {/* <Routes> */}
          <Route path="/dashboard" element={<>
            {data != 0 ? <ColorModeContext.Provider value={colorMode} >
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                  <Sidebar />
                  <main className="dashboard--content" >
                    <Topbar />
                  </main>
                </div>
              </ThemeProvider>
            </ColorModeContext.Provider> : <><><NavLatest /><Background /><LoginForm checker={checker} increment={handleCheckerIncrement} /></></>}
            
          </>} />
          <Route path="/cp" element={<><ColorModeContext.Provider value={colorMode} >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                <Sidebar />
                <main className="dashboard--content" >
                  <Topbar />
                  <Cp />
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider></>} />
          <Route path="/appdev" element={<><ColorModeContext.Provider value={colorMode} >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                <Sidebar />
                <main className="dashboard--content" >
                  <Topbar />
                  {data == 1 ? <StudentApp/> : <AppDev />}
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider></>} />
          <Route path="/webdev" element={<><ColorModeContext.Provider value={colorMode} >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                <Sidebar />
                <main className="dashboard--content" >
                  <Topbar />
                  {data == 1 ? <StudentWebDev /> : <WebDev />}
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider></>} />
          <Route path="/ml" element={<><ColorModeContext.Provider value={colorMode} >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                <Sidebar />
                <main className="dashboard--content" >
                  <Topbar />
                  {data == 1 ? <StudentML /> : <Ml />}
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider></>} />
          <Route path="/foss" element={<><ColorModeContext.Provider value={colorMode} >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                <Sidebar />
                <main className="dashboard--content" >
                  <Topbar />
                  {data == 1 ? <StudentFoss /> : <Foss />}
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider></>} />
          <Route path="/design" element={<><ColorModeContext.Provider value={colorMode} >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                <Sidebar />
                <main className="dashboard--content" >
                  <Topbar />
                  {data == 1 ? <StudentDesign /> : <Design />}
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider></>} />
          <Route path="/infosec" element={<><ColorModeContext.Provider value={colorMode} >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                <Sidebar />
                <main className="dashboard--content" >
                  <Topbar />
                  {data == 1 ? <StudentInfosec /> : <InfoSec />}
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider></>} />
          <Route path="/blockchain" element={<><ColorModeContext.Provider value={colorMode} >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                <Sidebar />
                <main className="dashboard--content" >
                  <Topbar />
                  {data == 1 ? <StudentBlockchain /> : <Blockchain />}
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider></>} />
          <Route path="/form" element={<><ColorModeContext.Provider value={colorMode} >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                <Sidebar />
                <main className="dashboard--content" >
                  <Topbar />
                  <Form />
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider></>} />
          <Route path="/faq" element={<><div><ColorModeContext.Provider value={colorMode} >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                <Sidebar />
                <main className="dashboard--content" >
                  <Topbar />
                  <div style={{ overflowY: "auto" }}>
                    {data == 1 ? <StudentFAQ /> : <FAQ />}
                  </div>
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider></div></>} />
          <Route path="/calendar" element={<><ColorModeContext.Provider value={colorMode} >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                <Sidebar />
                <main className="dashboard--content" >
                  <Topbar />
                  {data==1 ? <StudentCalendar/> : <Calendare/>}
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider></>} />
          <Route path="/studentCalendar" element={<><ColorModeContext.Provider value={colorMode} >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                <Sidebar />
                <main className="dashboard--content" >
                  <Topbar />
                  <StudentCalendar/>
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider></>} />


          {/* <Route path="/calendar" element={<Calendare/>}></Route> */}
          {/* <Route path="/webdev" element={<WebDev />} />
        <Route path="/ml" element={<Ml />} />
        <Route path="/foss" element={<Foss />} />
        <Route path="/design" element={<Design />} />
        <Route path="/infosec" element={<InfoSec />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/form" element={<Form />} />
        <Route path="/faq" element={<FAQ />} /> */}
        </Routes>
      </BrowserRouter>

      {/* <AlumniApp/> */}
      {/* <LoginForm/> */}
      {/* <FullScreenDialog/> */}




































    </>
  );
};

export default App;