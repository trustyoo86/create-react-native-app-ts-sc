"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const native_1 = __importDefault(require("styled-components/native"));
class App extends React.Component {
    render() {
        return (<Sc.container>
        <react_native_1.Text>Open up App4.js to start working on your app!</react_native_1.Text>
        <react_native_1.Text>Changes you make will automatically reload.</react_native_1.Text>
        <react_native_1.Text>Shake your phone to open the developer menu.</react_native_1.Text>
        <Sc.input placeholder='테스트입니다.'/>
      </Sc.container>);
    }
}
exports.default = App;
const Sc = {
    container: native_1.default.View `
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
  `,
    input: native_1.default.TextInput `
    width: 300px;
    height: 50px;
    border: 1px solid #bdbdbd;
  `,
};
//# sourceMappingURL=Root.js.map