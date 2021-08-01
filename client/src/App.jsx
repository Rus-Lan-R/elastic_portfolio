import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<About />
				</Route>
				<Route exact path="/info">
					<div>qwwert</div>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
