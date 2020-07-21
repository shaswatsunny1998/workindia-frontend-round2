import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import logo from "../logo.svg";
import { FixedSizeList } from "react-window";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import Chat1 from './chat2';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#25D366",
    },
    secondary: {
      main: green[500],
    },
  },
});

  
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList() {
  
 const [chat, setChat] = React.useState(false)
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
function renderRow(props) {
  const { index, style } = props;

  return (
    <>
      <ListItem button onClick={()=>setChat(true)} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt=" Remy Sharp" src={logo} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography color="textPrimary">Ali Connors</Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider component="li" />
    </>
  );
}













  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if(chat){
     return <Chat1/>
  }
  else{return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <FixedSizeList
          style={{
            height: "100%",
            width: "100%",
          }}
          height={1000}
          width={1000}
          itemSize={20}
          itemCount={100}
        >
          {renderRow}
        </FixedSizeList>
      </div>
    </ThemeProvider>
  )}
}