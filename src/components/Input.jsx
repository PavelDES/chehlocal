import React from "react";

class Input extends React.Component {
    render() {
        return <input type={this.props.type} name={this.props.name} />;
    }
}

export default Input;