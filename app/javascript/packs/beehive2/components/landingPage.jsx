import React from 'react';
class LandingPage extends React.Component {
  render() {
    return(
      <div style={{width:'100%'}}>
        <div>
          <h1>Hello World. Time for react</h1>
        </div>
        <div style={{ position: 'fixed', bottom: '0'}}>
          <footer style={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#03a9f4'}}>
            <div>
              <h2>Logo</h2>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <h2>About Us </h2>
              <h2>About Research </h2>
              <h2>Contact Us</h2>
            </div>
          </footer>
        </div>
      </div>
    )
  }


}
export default LandingPage
