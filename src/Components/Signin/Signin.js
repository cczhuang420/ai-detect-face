import React from "react";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signinEmail: "",
      signinPassword: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signinEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signinPassword: event.target.value });
  };

  onSigninSubmit = () => {
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signinEmail,
        password: this.state.signinPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      })
      .catch((err) => {
        console.log(err.detail);
      });
  };

  render() {
    return (
      <article className="br4 shadow-5 ba dark-gray b--black-10 wd7 mv4 mw6 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 b fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>

              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>

              <div className="">
                <input
                  onClick={this.onSigninSubmit}
                  className="b mt3 br2 ph3 pv2 input-reset ba b--black-8 bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign In"
                />
              </div>

              <div className="f6 pointer">
                <p onClick={() => this.props.onRouteChange("register")}>
                  Register
                </p>
              </div>
            </fieldset>
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;
