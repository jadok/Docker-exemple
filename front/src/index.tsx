import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';
/*import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';*/
/*
class MyHeader implements RequestInit {
  headers: {
    Origin: '*'
  };
  method: 'GET';
  mode: 'cors';
}

class MyComponent extends Component<any, any> {
    componentDidMount() {
      fetch('http://localhost:9898', new MyHeader())
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          var body = document.getElementsByTagName('html');
          if (body !== null) {
            body[0].style.backgroundColor = data.state;
          }
        });
    }
  render() {
		return (<div>Hello world</div>);
	}
}*/

function toogleBurger(instance, event) {
  console.log(event.target);
  event.target.classList.toggle('open');
}
class Burger extends Component<any, any> {
  render() {
    return (
      <div id="burger_menu" onClick={ linkEvent(this.props, toogleBurger) } >
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
}

class Header extends Component<any, any> {
  render() {
    return (
      <header>
        <Burger />
        <h1> Header </h1>
      </header>
    );
  }
}
/*
class Footer extends Component<any, any> {
  render() {
    return (
      <footer>
        <span>Le footer</span>
      </footer>
    );
  }
}

class Layout extends Component<any, any> {
  render() {
    return (
      <div>
        <Header />
        { this.props.children }
      </div>
    );
  }
}


const browserHistory = createBrowserHistory();

const routes = (
  <Router history={ browserHistory }>
    <Route component={ Layout }>
      <IndexRoute component={ MyComponent }/>
    </Route>
  </Router>
);*/

Inferno.render(<Header />, document.getElementById('app'));