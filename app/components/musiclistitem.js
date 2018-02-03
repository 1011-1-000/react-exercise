import React from 'react';
import './musiclistitem.less';
import Pubsub from 'pubsub-js';
import { Link } from 'react-router';

let MusicListItem = React.createClass({
	playMusic(musicItem) {
		Pubsub.publish('PLAY_MUSIC', musicItem);
	},

	deleteMusic(musicItem, e){
		e.stopPropagation();
		Pubsub.publish('DELETE_MUSIC', musicItem);
	},

	render(){
		let musicItem = this.props.musicItem;

		return (
			<Link to = "/">
			<li onClick = { this.playMusic.bind(this, musicItem) } className = {`components-listitem row ${this.props.focus? 'focus':''}`}>
				<p> <strong> {musicItem.title} - {musicItem.artist} </strong> </p>
				<p onClick={ this.deleteMusic.bind(this, musicItem) }className = "-col-auto delete"></p>
			</li>
			</Link>
		)
	}
})

export default MusicListItem;