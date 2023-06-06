import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Header.css'
import './MainContent.css'
import './Footer.css'
import logo from './img/logo.svg'
// import logo from './img/logoFooter.svg'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <div className='App'>
      <header className='header'>
        <img src={logo} alt="logo" className='headerLogo'/>
      <div className='headerListBox'>
        <ul className='headerList'>
          <li className='listItem'><a href="#">Главная</a> </li>
          <li className='listItem'><a href="#">О нас</a> </li>
          <li className='listItem'><a href="#">Контакты</a> </li>
        </ul>
      </div>
      </header>
      <div className="mainContent">
        <div className="number">
          <div className="screen"><p className='num'>140</p></div>
        </div>
        <div className="buttonsBox">
          <button className='btn1'>Увеличить</button>
          <button className='btn2'>Уменьшить</button>
          <button className='btn3'>Сбросить</button>
        </div>
      </div>
      <footer className='footer'>
        <div className="footerBox">
        <img src={logo} alt="logo" className='logoFooter'/>
          <ul className='footerList'>
            <li className='footerItem'><a href="#">Партнерам</a></li>
            <li className='footerItem'><a href="#">Разработчикам</a></li>
            <li className='footerItem'><a href="#">Вакансии</a></li>
          </ul>
        </div>
        <div className="footerInfo"><a href="#">ООО “интукод”, 2020г.</a> </div>
      </footer>
    </div>
    </>
  </React.StrictMode>,
)
