import React from "react";
const UserObject = {
  firstName: "Tomer",
  lastName: "Harari",
  signUp: function () {
    console.log(`${this.firstName} signed up!`);
  },
};
const UserObject2 = {
  firstName: "Tomer",
  lastName: "Harari",
  signUp: function () {
    console.log(`${this.firstName} signed up!`);
  },
};
class User {
  // constructor tells js what any given instance of User consists of
  // constructor function is called automatically anytime you say new in javascript
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.validEmail = this.confirmEmail();
  }
  confirmEmail() {
    return this.email.includes("@");
  }
  signUp() {
    console.log(`${this.name} signed up!`);
  }
}
// AdminUser inherits from User
// It has the same methods as the parent class
// If you omit constructer in AdminUser it will have the constructor of the parent
class AdminUser extends User {
  constructor(name, email, password) {
    super(name, email, password);
    this.admin = true;
  }
}

// Allows us to use all the methods and properties that React.Component class has such as useState
class App extends React.Component {
  constructor(props) {
    super(props);
    // You'd put all component states in here
    this.state = {
      count: 0,
    };
  }
  // Runs when component loads
  render() {
    return (
      <div>
        <h1>Hello React class</h1>
        <h2>COUNT IS {this.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          CLICK ME
        </button>
      </div>
    );
  }
}
export default App;
