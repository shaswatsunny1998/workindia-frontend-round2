import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CallScreen from "./screens/CallScreen";
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import CallSearch from './screens/CallSearch';
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Chat1 from './screens/chat2';
import AlignItemsList from './screens/chat';
import CircularProgress from "@material-ui/core/CircularProgress";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#25D366",
    },
   
  },
});


function App() {
   const [load, setLoad] = React.useState(true);
  useEffect(function(){
  setTimeout(function(){setLoad(false)}, 2000)
  },[])
 
	const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
	  console.log(newValue)
    setValue(newValue);
  };

	const [callSearch, setCallSearch] = useState(false);
	const [callSearchText, setCallSearchText] = useState("");

	if(!load){return (
              <ThemeProvider theme={theme}>
                <div className="App">
                 
                  {value == 1 ? (
                    <div className="App">
                      {!callSearch ? (
                        <TopBar setSearch={setCallSearch} />
                      ) : (
                        <SearchBar
                          setSearch={setCallSearch}
                          setText={setCallSearchText}
                          searchText={callSearchText}
                        />
                      )}
                      {!callSearch ? (<>
                        <Paper square elevation={1}>
                        <Tabs
                          centered
                          variant="fullWidth"
                          style={{ marginBottom: "10px",marginTop:'70px' }}
                          value={value}
                          indicatorColor="green"
                          textColor="primary"
                          onChange={handleChange}
                          aria-label="disabled tabs example"
                        >
                          <Tab label="Chats" />

                          <Tab label="Calls" />
                        </Tabs>
                      </Paper>
                        <CallScreen /></>
                      ) : (
                        <CallSearch searchText={callSearchText} />
                      )}
                    </div>
                  ) : (
                    <>
                      <TopBar/>
                      <Paper square elevation={1}>
                        <Tabs
                          centered
                          variant="fullWidth"
                          style={{ marginBottom: "10px",marginTop:'70px' }}
                          value={value}
                          indicatorColor="green"
                          textColor="primary"
                          onChange={handleChange}
                          aria-label="disabled tabs example"
                        >
                          <Tab label="Chats" />

                          <Tab label="Calls" />
                        </Tabs>
                      </Paper>
                      <AlignItemsList />
                    </>
                  )}
                </div>
              </ThemeProvider>
            );}
          else{return (
                 <ThemeProvider theme={theme}>
                   <div
                     style={{
                       height: "100vh",
                       width: "100vw",
                       display: "flex",
                       alignItems: "center",
                       justifyContent: "center",
                     }}
                   >
                     <CircularProgress color="primary" />
                   </div>
                 </ThemeProvider>
               );}
}

export default App;
