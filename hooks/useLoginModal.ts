import { create } from 'zustand';

interface LoginStore {
  isOpen: boolean;
  onClose: ()=>void;
  onOpen: ()=>void;
}

const useLoginModal = create<LoginStore>((set)=>({
  isOpen: false,
  onClose: ()=>set({isOpen: false}),
  onOpen: ()=>set({isOpen: true})
}))

export default useLoginModal;