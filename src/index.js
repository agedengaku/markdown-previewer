import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './queries.css';

class PreviewerParent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "# I Love HEADERS!\n## And subheaders, too\nThis is [a link](https://jmotaylor.com).\nAnd this is some `inline code`.\nNow if you want a block o' code, then check this out:\n```\nI know, I know. These aren't really\nlines of code.\nBut you can pretend that they are.\nYou know what I'm saying?\n```\nList items? I got you covered!\n- **Cool**\n- **Beans** (bold text, wow!) \n\nNow we need some blockquotes:\n> I guess this is a blockquote, right?\n\nAnd last but not least, the image...\n\n![Of course it had to be a cat photo](https://i.kym-cdn.com/photos/images/newsfeed/000/012/445/lime-cat.jpg)\n\nOf course it had to be a cat photo.",
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

function Editor(props) {
	return (<textarea onChange={props.onChange} id={'editor'} value={props.value}></textarea>);	
}

function Preview(props) {
	function createMarkup() {
		return {__html: window.marked(props.value)};
	}
	return (<div id={'preview'} dangerouslySetInnerHTML={createMarkup()}></div>)
}

ReactDOM.render(<PreviewerParent />, document.getElementById('root'));
