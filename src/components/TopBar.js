import React from "react";
import './TopBar.css';
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";

function TopBar(props) {
	const handleSearch = () => {
		props.setSearch(true);
	}
	
	return (
		<div className="top-bar-root">
			<AppBar position="fixed" elevation={0} className="app-bar">
				<Toolbar>
					<Typography variant="h6" className="top-title" style={{color:'#ffffff'}}>WhatsApp</Typography>
					<IconButton onClick={handleSearch}>
						<Search className="clr-white"/>
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default TopBar;