import React, { useCallback, useState } from "react";
import useLoginModal from "@/hooks/useLoginModal";
import Modal from "../Modal";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { signIn } from "next-auth/react";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  // const onSubmit = useCallback(async () => {
  //   try {
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, []);

  const bodyContent = (
    <div className="flex flex-col gap-4 text-white">
      <div
        onClick={async () => {
          signIn("google");
          loginModal.onClose;
        }}
        className="w-full flex items-center justify-center gap-2 p-4 border border-neutral-700 rounded-md"
      >
        <FcGoogle size={25} /> <p className="text-1xl">Google</p>
      </div>
      <div
        onClick={() => {
          signIn("github", { redirect: false });
          // loginModal.onClose;
        }}
        className="w-full flex items-center justify-center gap-2 p-4 border border-neutral-700 rounded-md"
      >
        <FaGithub size={25} color="white" /> <p className="text-1xl">GitHub</p>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      disabled={isLoading}
      title="Sign in to your account"
      // onSubmit={onSubmit}
      body={bodyContent}
    />
  );
};

export default LoginModal;
