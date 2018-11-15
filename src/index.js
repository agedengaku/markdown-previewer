import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class PreviewerParent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "# A Header!\n## And a subheader\nThis is [a link](https://jmotaylor.com)\nAnd this is some `inline code`\nNow if you want a block code, then check this out:\n```You can pretend...\nThat this here\'s some code,\nYou know what I\'m saying?```\nIf you want some list item, then here you go...\n- **Cool**\n- **Beans** (bold text, wow!) \n\nNow we need some blockquotes:\n> I guess this is a blockquote, right?\n\nAnd last but not least, the image...\n![React Logo w/ Text](https://goo.gl/Umyytc)",
		};
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleOnChange(event) {
		this.setState({inputValue: event.target.value});
		console.log(this.state.inputValue);
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
