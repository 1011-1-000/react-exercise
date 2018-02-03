import React from 'react';
import './header.less';
import { Link } from 'react-router'

let Header = React.createClass({
	render(){
		return (
			<div className = "components-header row" >
				<Link to = "/">
					<span>
						<img src="/static/logo.png" width="40" alt="" className='-col-auto' style = {{float:"left"}}/>
						<h1 className="caption"> 我的音乐播放器 </h1>
					</span>
				</Link>
			</div>
		);
	}
});

export default Header;