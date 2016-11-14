import React, {Component} from 'react';
import {Link} from 'react-router';
import Ripple from 'components/Ripple';
import styles from './styles.css';

class Drawer extends Component {
	close = () => {
		this.Drawer.classList.remove('is-visible');
	}

	open = () => {
		this.Drawer.classList.add('is-visible');
	}

	render() {
		const {docked, title, drawerItems} = this.props;

		const renderItems = drawerItems.map((item, index) => {
			const className = 'mdi ' + item.icon;
			return (
				<li className="drawer-item" key={index} onClick={this.close}>
					<Link to={item.url} className="drawer-link">
						<i className={className}></i>
						<Ripple color="#bababa"/>
						{item.name}
					</Link>
				</li>
			)
		});

		return (
			<div className="drawer-wrapper" ref={v => this.Drawer =v}>
				<div className="drawer">
					<span className="title" onClick={this.close}>{title}</span>
					<ul className="drawer-lists">
						{renderItems}
					</ul>
				</div>
				{!docked && <div className="obfuscator" onClick={this.close}></div>}
			</div>
		);
	}
}

export default Drawer;