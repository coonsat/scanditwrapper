import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/Scanditwrapper.css";

export default class Scanditwrapper extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
