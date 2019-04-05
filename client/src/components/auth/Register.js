import React from "react";
import {Link} from 'react-router-dom'

const Register = props => {
  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className='text-center w-100' style={{'max-width': '450px'}}>
          <h1 className="display-5">Register for SlackChat</h1>
          <form className='bg-white p-3'>
            <div className="form-group">
              <input className='form-control' type="tex" placeholder="name" />
            </div>
            <div className="form-group">
              <input className='form-control' type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input className='form-control' type="password" placeholder="Password (min 6 chars)" />
            </div>
            <div className="form-group">
              <input className='form-control' type="password" placeholder="Password Confirmation" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary w-100 ">
                Submit
              </button>
            </div>
          </form>

          <div className="card mt-3">
            <div className="card-body">
              Already a user? <Link to="/login">Login</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
