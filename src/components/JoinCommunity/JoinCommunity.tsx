import { FaRegPaperPlane } from "react-icons/fa";
import { Transition } from "../Transition";

export function JoinCommunity() {
  return (
    <Transition className="grid items-center px-4 py-8 md:p-44 md:px-36 md:grid-cols-2 bg-secondary">
      <h3 className="max-w-lg text-4xl font-semibold text-white">
        Unete a nuestra comunidad para enterarte de todo
      </h3> 
      <div className="mx-auto mt-5 md:mx-auto ">
        <button className="flex items-center justify-between py-5 text-white transition-all duration-100 bg-black rounded-lg px-7 w-fit hover:bg-black/70">
        <FaRegPaperPlane />
        <span className="ml-3">Unete ala comunidad</span>
        </button>
        
      </div>
    </Transition>
  );
}
