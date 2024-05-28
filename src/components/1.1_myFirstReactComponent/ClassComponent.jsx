import { Component } from "react";
import PropTypes from "prop-types";

export class ClassComponent extends Component {
  render() {
    return (
      <div className="text-center py-8">
        <h1 className="text-5xl">Hellow, {this.props.jsd}</h1>
        <p>
          This React component is made by a function declaration, we call it a
          function component 🥸
        </p>
      </div>
    );
  }
}

export default ClassComponent;

ClassComponent.propTypes = {
  jsd: PropTypes.string
}