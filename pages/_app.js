import UserProvider from "@/src/components/context/UserContext";
import {Provider} from "react-redux";
import { store } from "@/src/redux/store";

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <UserProvider>
                <Component {...pageProps} />
            </UserProvider>
        </Provider>
    );
}
