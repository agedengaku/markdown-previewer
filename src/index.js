import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class PreviewerParent extends React.Component {
	render() {
		return (
			<div>
				<Editor /><Preview />
			</div>	
		);
	}
}

class Editor extends React.Component {
	render() {
		return (<textarea id={'editor'}></textarea>);	
	}
}

class Preview extends React.Component {
	render() {
		return (<textarea id={'preview'} disabled={'true'}></textarea>);	
	}
}

ReactDOM.render(<PreviewerParent />, document.getElementById('root'));
