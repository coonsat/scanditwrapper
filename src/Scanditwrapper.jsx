import { Component, createElement } from "react";
import ScanditBarcodeScanner from "scandit-sdk-react";
import {
    Barcode,
    BarcodePicker,
    Camera,
    CameraAccess,
    CameraSettings,
    ScanSettings,
    SingleImageModeSettings,
  } from "scandit-sdk";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/Scanditwrapper.css";

export default class Scanditwrapper extends Component {

    // instantiate the props here. 
    constructor(props) {
        super(props);
    }

    // documentaiton says to put this in here.
    getScanSettings = () => {
        return new ScanSettings({ enabledSymbologies: [Barcode.Symbology.CODE128] });
    };

    componentDidMount() {
        // put stuff in here when the component mounts
    }

    render() {
        return (
            <ScanditBarcodeScanner
                // Library licensing & configuration options (see https://docs.scandit.com/stable/web/globals.html#configure)
                licenseKey={this.licenseKey}
                engineLocation="https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build" // could also be a local folder, e.g. "build"
                // Picker events
                onReady={() => this.setState({ scannerReady: true })}
                onScan={console.log}
                onScanError={console.log}
                // Picker options
                scanSettings={this.getScanSettings()}
            />
        );
    }
}
