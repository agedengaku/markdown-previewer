import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class PreviewerParent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
		};
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleOnChange(event) {
		this.setState({inputValue: event.target.value});
	}

	render() {
		return (
			<div>
				<Editor onChange={this.handleOnChange} /><Preview value={this.state.inputValue} />
			</div>	
		);
	}
}

class Editor extends React.Component {
	render() {
		return (<textarea onChange={this.props.onChange} id={'editor'}></textarea>);	
	}
}

class Preview extends React.Component {
	render() {
		return (<textarea id={'preview'} disabled={true} value={this.props.value}></textarea>);	
	}
}

ReactDOM.render(<PreviewerParent />, document.getElementById('root'));
