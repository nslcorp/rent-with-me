import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const renderAuthButtons = function(isAuth) {
  if (isAuth) {
    return <a className='nav-item nav-link clickable' onClick={() => console.log('Logout header')}>Logout</a>
  }

  return (
    <React.Fragment>
      <Link className='nav-item nav-link' to='/login'>Login <span className='sr-only'>(current)</span></Link>
      <Link className='nav-item nav-link' to='/register'>Register</Link>
    </React.Fragment>
  )
};

const Header = ({isAuth=false}) => {
  
  
  
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>RentWthMe
        </Link>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup'
                aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav ml-auto'>
            <Link className='nav-item nav-link' to='/add-rent'>Add rent</Link>
            {renderAuthButtons(isAuth)}
          </div>
        </div>
      </div>
    </nav>
  );
};


export default withRouter(Header);