import '../styles/style.css';
import { AuthContextProvider } from "../api/firebase/AuthContext";

function MyApp({ Component, pageProps }) {
    return (
        <AuthContextProvider>
            <Component {...pageProps} />
        </AuthContextProvider>
    );
}

export default MyApp;