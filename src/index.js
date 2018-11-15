import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class PreviewerParent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '*hihihi*',
		};
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleOnChange(event) {
		this.setState({inputValue: event.target.value});
	}

	render() {
		return (
			<div id={"editor-preview"}>
				<Editor onChange={this.handleOnChange} value={this.state.inputValue} /><Preview value={this.state.inputValue} />
			</div>	
		);
	}
}

class Editor extends React.Component {
	render() {
		return (<textarea onChange={this.props.onChange} id={'editor'} value={this.props.value}></textarea>);	
	}
}

class Preview extends React.Component {
	constructor(props) {
		super(props);
		this.createMarkup = this.createMarkup.bind(this);
	}
	createMarkup() {
		return {__html: window.marked(this.props.value)};
	}
	render() {
		return (<div id={'preview'} dangerouslySetInnerHTML={this.createMarkup()}></div>);	
	}
}

ReactDOM.render(<PreviewerParent />, document.getElementById('root'));
