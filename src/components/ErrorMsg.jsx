import { MdOutlineNearbyError } from "react-icons/md";
const ErrorMsg = (e) => {
  return (
    <div>
      <div className="pt-[10px] pb-[10px] pr-[5px] pl-[5px] flex bg-red-400/90 blur-[0.2px] select-none border-6 text-xl m-2 w-[360px] h-[50px] rounded-4xl border-sky-900/50 justify-center items-center gap-4 flex-row-reverse cursor-pointer">
        The entered value is incorrect <MdOutlineNearbyError />
      </div>
    </div>
  );
};

export default ErrorMsg;
