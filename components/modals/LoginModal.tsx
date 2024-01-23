import React, { useCallback, useState } from "react";
import Input from "../Input";
import useLoginModal from "@/hooks/useLoginModal";
import Modal from "../Modal";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const LoginModal = () => {
  const loginModal = useLoginModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(()=>{
    if (isLoading) return
  }, [isLoading])

  const onSubmit = useCallback(async () => {
    try {
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const bodyContent = (
    <div className="flex flex-col gap-4 text-white">
      <div className="w-full flex items-center justify-center gap-2 p-4 border border-neutral-700 rounded-md">
      <FcGoogle size={25}/> <p className="text-1xl">Google</p>  
      </div>
      <div className="w-full flex items-center justify-center gap-2 p-4 border border-neutral-700 rounded-md">
      <FaGithub size={25} color="white"/> <p className="text-1xl">GitHub</p> 
      </div>
      
    </div>
  )

  return (
    <Modal
    onClose={loginModal.onClose}
    isOpen={loginModal.isOpen}
    disabled={isLoading}
    title="Sign in to your account"
    onSubmit={onSubmit}
    body={bodyContent}
    />
    
    
  );
};

export default LoginModal;
