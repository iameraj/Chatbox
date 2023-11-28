import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import AuthenticationPage from "./components/auth/AuthentificationPage";
import ChatBox from "./components/chat/ChatBox";

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <AuthenticationPage />
                <ChatBox />
            </div>
            <Footer />
        </>
    );
}
export default App;
