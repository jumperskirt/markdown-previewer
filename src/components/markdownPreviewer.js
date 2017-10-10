import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import showdown from 'showdown';

class MarkdownPreviewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      converter: new showdown.Converter(),
      value: '#hello\n##hello\n###hello\n####hello',
    };
  }

  createMarkup() {
    return {
      __html: this.state.converter.makeHtml(this.state.value)
    }
  }

  onInputChange(value) {
    this.setState({value});
  }

  render() {
    return (
    <div>

      <div className="row">
        <div className="col-md-6">
          <textarea
            className="full-height"
            value={this.state.value}
            onChange={event => this.onInputChange(event.target.value)}
            ></textarea>
        </div>
        <div className="col-md-6">
          <div className="markdownText">
            <div dangerouslySetInnerHTML={this.createMarkup()}></div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default MarkdownPreviewer;
