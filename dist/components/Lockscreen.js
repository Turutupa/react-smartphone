var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import styled from 'styled-components';
import { borderRadius } from './constants';
function getTime() {
    var d = new Date();
    var hours = String(d.getHours());
    var minutes = String(d.getMinutes());
    var seconds = String(d.getSeconds());
    if (hours.length < 2) {
        hours = '0' + hours;
    }
    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }
    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }
    return hours + ":" + minutes + ":" + seconds;
}
var Lockscreen = function (props) {
    var _a = React.useState(getTime()), time = _a[0], setTime = _a[1];
    React.useEffect(function () {
        var timer = setInterval(function () {
            setTime(getTime());
        }, 1000);
        return function () {
            clearTimeout(timer);
        };
    }, [time]);
    return (_jsx(LockscreenOverlay, __assign({ status: props.status }, { children: _jsx(Clock, { children: time }, void 0) }), void 0));
};
export default Lockscreen;
var LockscreenOverlay = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: rgb(30, 30, 30, 0.9);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  border-radius: ", ";\n  z-index: 10;\n  color: white;\n  font-family: 'Monaco', 'Arial', 'consolas', 'Calibri', 'Sans serif', 'Sans';\n  font-size: 3rem;\n  transition: all 0.2s linear;\n  visibility: ", ";\n"], ["\n  background-color: rgb(30, 30, 30, 0.9);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  border-radius: ", ";\n  z-index: 10;\n  color: white;\n  font-family: 'Monaco', 'Arial', 'consolas', 'Calibri', 'Sans serif', 'Sans';\n  font-size: 3rem;\n  transition: all 0.2s linear;\n  visibility: ",
    ";\n"])), borderRadius, function (props) {
    return props.status ? "visible" : "hidden";
});
var Clock = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(15px + 50%);\n"], ["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(15px + 50%);\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=Lockscreen.js.map