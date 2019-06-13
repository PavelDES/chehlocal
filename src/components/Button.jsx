import React from "react";

class Button extends React.Component{
    render() {
        return <button className={this.props.ctyleclass} onClick={this.props.action}>
            {this.props.title} </button>;
    }
}

export default Button;