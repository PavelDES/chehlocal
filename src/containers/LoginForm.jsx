import React, { Component } from "react";
import "../App.css"
import Input from "../components/Input"
import Button from "../components/Button"

class LoginForm extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return <form className="signin_form">
            <div className="signtext">
                Вход
            </div>
            <input type={"tel"} className={"signphon"} placeholder={"Номер телефона*"} name={"phone"}/>
            <div className="phonetemp">
                Например: +7 999 000 00 00
            </div>
            <div className="bottomblok">
                <button type={"reset"} className={"bottomne"} title={"submit"} />
            <button className={"bottomsend"} title={"submit"}/>
            </div>
        </form>;
    }

}
export default LoginForm;