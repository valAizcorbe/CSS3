import React from 'react';
import './reset.css'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.dropdown = React.createRef()

  }

  toggleShow = () => {
    console.log(this.dropdown.current)
    let { current } = this.dropdown

    if (current.classList.contains('show-animation')) {
      current.classList.add('hide-animation')
      current.classList.remove('show-animation')
    } else {
      current.classList.add('show-animation')
      current.classList.remove('hide-animation')
    }
  }

  render() {
    return (
      <div id='image'>
        <nav>
          <div id='logo'>Start Bootstrap</div>

          <i id='hamburder-icon' className="fas fa-bars" onClick={this.toggleShow}> MENU</i>
          <div id="button-container">
            <div className="button">SERVICES</div>
            <div className="button">PORTFOLIO</div>
            <div className="button">ABOUT</div>
            <div className="button">TEAM</div>
            <div className="button">CONTACT</div>
          </div>
        </nav>
        <div className='dropdown' ref={this.dropdown}>
          <div className="dropdown-button">SERVICES</div>
          <div className="dropdown-button">PORTFOLIO</div>
          <div className="dropdown-button">ABOUT</div>
          <div className="dropdown-button">TEAM</div>
          <div className="dropdown-button">CONTACT</div>
        </div>
        <div className='background' >
          <h3>Welcome To Our Studio!</h3>
          <h1>IT'S NICE TO MEET YOU </h1>
          <button className='yellow-button'>TELL ME MORE</button>
        </div>
      </div >
    );
  }
}

export default App;
