import React from "react";

import { OutputDisplay } from "common/constants";
import "./OutputDisplay.scss";

class OutputComponent extends React.Component {
  constructor(props) {
    super(props);

    this.parentRef = React.createRef();
    this.childRef = React.createRef();

    this.state = {
      fontScale: OutputDisplay.FONT_SCALE,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.handleComponentScaling();
    }
  }

  handleComponentScaling() {
    const { fontScale } = this.state;

    const currentFontScale = this.parentRef.current.clientWidth / this.childRef.current.clientWidth;

    if (currentFontScale < OutputDisplay.FONT_SCALE) {
      this.setState({ fontScale: currentFontScale });
    } else if (fontScale < OutputDisplay.FONT_SCALE) {
      this.setState({
        fontScale: OutputDisplay.FONT_SCALE,
      });
    }
  }

  render() {
    const { fontScale } = this.state;
    const { displayedValue } = this.props;

    return (
      <div ref={this.parentRef} className="output-display-container">
        <div
          ref={this.childRef}
          style={{ transform: `scale(${fontScale},${fontScale})` }}
          className="output-display-container__output-text">
          {displayedValue}
        </div>
      </div>
    );
  }
}

export default OutputComponent;
