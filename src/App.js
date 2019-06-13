import React, { Component } from 'react';
import './App.css';
import LoginForm from "./containers/LoginForm"

class App extends Component {
  render() {
    return (
      <div className="App">
          <header>
              <div className="logo"><img src={"./Logo.svg"} alt="" /></div>
              <nav className="index">
                  <span onClick="InWin('signin.html')" className="signin">Вход</span>
                  <span onClick="InWin('signup.html')" className="signup">Регистрация</span>
              </nav>
          </header>
       <LoginForm />
          <footer>
              <span className="copir"> © CHEFLOCAL LLC, 2019 </span>
              <div className="footer">
                  <span className="mail">eda@cheflocal.ru</span>
                  <span className="regulation">Правила использовани</span>
                  <span className="policy">Политика конфиденциа</span>
              </div>
          </footer>
      </div>
    );
  }
}

export default App;
