import Layout from "@/components/Layout";
import LoginModal from "@/components/modals/LoginModal";
import useLoginModal from "@/hooks/useLoginModal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import TaskProvider from "@/providers/task-provider";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const loginModal = useLoginModal();

  return (
    <>
      {/* <RegisterModal/> */}

      <SessionProvider session={session}>
        <TaskProvider>
          {loginModal.isOpen && <LoginModal />}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TaskProvider>
      </SessionProvider>
    </>
  );
}
