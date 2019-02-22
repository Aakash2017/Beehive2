import React from 'react';
const Footer = ({title}) => (<footer>{title}</footer>);
class LandingPage extends React.Component {
  render() {
    return(
      <div>
        <h1>Hello World. Time for react</h1>
         <Footer title={footer}/>
      </div>
    )
  }
}
export default LandingPage
