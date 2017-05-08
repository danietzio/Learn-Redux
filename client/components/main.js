import React from 'react';

// import link
import { Link } from 'react-router';

export default React.createClass({
  render() {
    { console.log("salam",  this.props )};
    return(
        <div>
          <h1>
            <Link to="/">DanialaGram</Link>
          </h1>
          { React.cloneElement(this.props.children , this.props) }
        </div>
    )
  }
});
