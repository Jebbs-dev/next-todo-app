import Layout from "@/components/Layout";
import LoginModal from "@/components/modals/LoginModal";
import useLoginModal from "@/hooks/useLoginModal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import { Toaster } from "react-hot-toast";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const loginModal = useLoginModal();

  const queryClient = new QueryClient()

  return (
    <>
      {/* <RegisterModal/> */}
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          {/* <Toaster/> */}
          {loginModal.isOpen && <LoginModal />}
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
}
