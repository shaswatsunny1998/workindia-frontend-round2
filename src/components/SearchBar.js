import React from "react";
import './SearchBar.css';
import { ArrowBack, Clear } from '@material-ui/icons';
import { AppBar, IconButton, Toolbar, TextField } from "@material-ui/core";


function SearchBar(props) {
	const handleBack = () => {
		props.setSearch(false);
	}

	const handleTextChange = (event) => {
		props.setText(event.target.value);
	}

	const clearSearch = () => {
		props.setText("");
	}

	return (
		<AppBar position="fixed"  className="search-bar">
			<Toolbar style={{marginTop:'20px'}}>
				<IconButton edge="start" onClick={handleBack}>
					<ArrowBack className="clr-teal" />
				</IconButton>
				<TextField variant="standard"
					placeholder="Search..." 
					InputProps={{disableUnderline: true}}
					className="search-input" 
					autoFocus 
					onChange={handleTextChange}
					value={props.searchText} />
				{props.searchText.length !== 0?
					<IconButton edge="end" onClick={clearSearch}>
						<Clear />
					</IconButton>
				:null }
			</Toolbar>
		</AppBar>
	)
}

export default SearchBar;