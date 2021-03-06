import React, {Component} from 'react';
import Button from 'components/Button';
import FlatButton from 'components/FlatButton';
import TextField from 'components/TextField';
import styles from './styles.css';

class Stepper extends Component {
	getStepIcon(status, index) {
		switch (status) {
			case 'unread':
				return <i className="number">{index + 1}</i>;
			case 'agreed':
				return <i className="mdi mdi-success"></i>;
			case 'disagreed':
				return <i className="mdi mdi-error"></i>;
			default:
				return <i className="number">{index + 1}</i>;
		}
	}

	getOperated() {
		return (
			<div className="operable">
				<TextField name="reason" placeholder="意见" multiLine={true} ref={r => this.textfield = r}/>
				<div className="btn-wrap">
					<Button isRaised={true} onClick={this.agreed}>同意</Button>
					<FlatButton onClick={this.disagreed}>否决</FlatButton>
				</div>
			</div>
		)
	}

	agreed = (e) => {
		const {onApproval} = this.props;
		let val = this.textfield.input.value.trim();
		const content = val == '' ? '通过' : val;
		typeof onApproval == 'function' && onApproval(content, true);
		
	}

	disagreed = (e) => {
		const {onApproval} = this.props;
		let val = this.textfield.input.value.trim();
		const content = val == '' ? '未通过' : val;
		typeof onApproval == 'function' && onApproval(content, false);
	}

	render() {
		const {info, current, isEditable} = this.props;
		const lastIndex = info.length - 1;
		let items = info.map((item, index) => {
			const {status, title, content} = item;
			const className = 'stepper-item ' + status;
			
			const showOperate = isEditable && current == index + 1;
			const hasContent = showOperate || content != '';
			const hideLeftLine =  lastIndex == index && !hasContent;
			
			let icon = this.getStepIcon(status, index);

			return (
				<li className={className} key={index}>
					<span className="title">{icon}{title}</span>
					{!hideLeftLine && (
						<div className="info">
							{showOperate ? this.getOperated() : content}
						</div>
					)}
				</li>
			)
		});
	
		return (
			<div className="stepper">
				<ul className="stepper-content">
					{items}
				</ul>
			</div>
		);
	}
}

export default Stepper;