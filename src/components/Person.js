import React from "react";
export default class Person extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't retrieve a person</div>;
    }

    return (
      <div>
        <div className="title">
          <h1>Title: {this.state.person.name.title}</h1>
        </div>
        <div className="first">
          <p>First Name: {this.state.person.name.first}</p>
        </div>
        <div className="last">
          <p>Surname: {this.state.person.name.last}</p>
        </div>
        <div className="img">
          <img src={this.state.person.picture.large} alt="" />
        </div>
        <div className="login">
          <p>Username: {this.state.person.login.username}</p>
        </div>
        <div>
          <p>Password: {this.state.person.login.password}</p>
        </div>
      </div>
    );
  }
}
