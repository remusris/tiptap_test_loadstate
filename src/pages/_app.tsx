import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { StringProvider } from "@/context/EditorContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StringProvider>
      <Component {...pageProps} />
    </StringProvider>
  );
}
