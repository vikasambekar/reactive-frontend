import UserProvider from "@/src/components/context/UserContext";

export default function MyApp({ Component, pageProps }) {
    return (
        <UserProvider>
            <Component {...pageProps} />
        </UserProvider>
    );
}
