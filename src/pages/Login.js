import React from 'react';

class Login extends React.Component {

    emailRef = React.createRef();
    passwordRef = React.createRef();
    handleSubmit = event =>{
        event.preventDefault();
        //get value
        console.log(this.emailRef.current.value);
        //console.log(event.target.email.value);
        const formData = {
            email:this.emailRef.current.value,
            password:this.passwordRef.current.value
        }
        console.log(formData);
        //login

        //redirect
        this.props.history.push('/')
    }

    render(){
        return (
            <div className="login-wrapper">
            <form className="box login-box" onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Email" ref={this.emailRef} name='email' />
                </div>
              </div>
              <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" type="password" placeholder="Password" ref={this.passwordRef} />
              </div>
            </div>
            <div className="control">
            <button className="button is-fullwidth is-primary">Login</button>
          </div>
        </form>
        </div>
            )
    }
    
}

export default Login;