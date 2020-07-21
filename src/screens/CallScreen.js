import React from "react";
import {Calls} from '../data/Calls';
import {List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, ListItemAvatar, Avatar} from "@material-ui/core";
import {CallReceived, Call} from "@material-ui/icons";
import "./CallScreen.css";

function CallScreen() {
	return (
		<List className="calls-list">
			{Calls.map((call) => (
				<ListItem button key={call.id} className="call-item">
					<ListItemAvatar>
						<Avatar>
							<img src="/assets/default-dp.png" className="call-profile"/>
						</Avatar>
					</ListItemAvatar>
					<ListItemText 
						primary={call.name} 
						secondary={
							<div className="secondary-info">
								<CallReceived className="incoming-icon"/> <span>{call.time}</span>
							</div>} />
					<ListItemSecondaryAction>
						<IconButton edge="end" aria-label="call">
							<Call className="call-icon"/>
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			))}
		</List>
	)
}

export default CallScreen;