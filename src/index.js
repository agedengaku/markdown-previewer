import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './queries.css';

class PreviewerParent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "# I Love HEADERS!\n## And subheaders, too\nThis is [a link](https://jmotaylor.com).\nAnd this is some `inline code`.\nNow if you want a block o' code, then check this out:\n```\nYou can pretend that this here's some code,\nyou know what I'm saying?\n```\nList items? I got you covered!\n- **Cool**\n- **Beans** (bold text, wow!) \n\nNow we need some blockquotes:\n> I guess this is a blockquote, right?\n\nAnd last but not least, the image...\n\n![Of course it had to be a cat photo](https://i.kym-cdn.com/photos/images/newsfeed/000/012/445/lime-cat.jpg)\n\nOf course it had to be a cat photo.",
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
