import "../styles/globals.css";
import { useUser } from "../lib/useUser";
import { UserContext } from "../lib/UserContext";

export default function App({ Component, pageProps }) {
  const { user, loading, signOut } = useUser();

  if (loading) return <div style={{ padding: 40, fontFamily: "Inter, sans-serif" }}>Loading...</div>;

  return (
    <UserContext.Provider value={user}>
      <Component {...pageProps} signOut={signOut} />
    </UserContext.Provider>
  );
}
