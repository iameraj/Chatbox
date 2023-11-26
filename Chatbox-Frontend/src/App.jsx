import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import AuthenticationPage from "./components/auth/AuthentificationPage";

function App() {
	return (
		<>
			<Header />
			<div className="container">
				<AuthenticationPage />
			</div>
			<Footer />
		</>
	);
}
export default App;
