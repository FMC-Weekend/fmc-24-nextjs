import Image from "next/image";
import heading from "../public/Previous Sponsors.png"
import group from "../public/Group 176.png"

export default function Home() {
  return (
  <div className="flex flex-wrap justify-center items-center ">
    <div className="absolute top-0 z-10 flex items-center justify-center w-full mt-[5961px]">    
     <div className="absolute top-0 z-10 flex items-center justify-center w-full mt-[5961px]">   
       <div className="font-clash text-[104px] font-bold leading-[127.92px] text-center">
         Previous Sponsors
       </div> 
     </div>
    </div>

    <div className="absolute top-0 z-0 flex items-center justify-center w-full mt-[6025px]">
      <Image
        src={group}
        className="w-[1184px] h-[429.07px] ml-[122px]"
        alt="Sponsors"
        />
    </div>
  </div>
  );
}
