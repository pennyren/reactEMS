import React, {Component} from 'react';
import Ripple from 'components/Ripple';
import styles from './styles.css';

class Popover extends Component {
	render() {
		const {items} = this.props;
		const lists = items.map((item, index) => {
			return (
				<li className="item" key={index}>
					<Ripple color="#bababa"/>
					{item}
				</li>
			)
		});
		return (
			<div className="popover">
				<ul className="menu">
					{lists}
				</ul>
			</div>
		)
	}
}

export default Popover; 