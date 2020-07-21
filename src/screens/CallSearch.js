import React from "react";
import './CallSearch.css';
import { Typography, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import FilterResults from "react-filter-search";
import { Calls } from '../data/Calls';
import { CallReceived, Call } from "@material-ui/icons";

function CallSearch(props) {
	return (
		<div className="call-search-screen">
			<div className="call-search-head">
				<Typography variant="p" className="call-title">Calls</Typography>
			</div>
			<div className="call-search-result">
				<FilterResults value={props.searchText} data={Calls}
					renderResults={results => (
						results.map(call => (
							<ListItem button key={call.id} className="call-item" ContainerComponent="div">
								<ListItemAvatar>
									<Avatar>
										<img src="/assets/default-dp.png" className="call-profile" />
									</Avatar>
								</ListItemAvatar>
								<ListItemText
									primary={call.name}
									secondary={
										<div className="secondary-info">
											<CallReceived className="incoming-icon" /> <span>{call.time}</span>
										</div>} />
								<ListItemSecondaryAction>
									<IconButton edge="end" aria-label="call">
										<Call className="call-icon" />
									</IconButton>
								</ListItemSecondaryAction>
							</ListItem>
						)
					))} /> 
			</div>
		</div>
	)
}

export default CallSearch;