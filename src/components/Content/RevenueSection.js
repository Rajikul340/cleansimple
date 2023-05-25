import Link from "next/link";
import { AiOutlineArrowUp } from "react-icons/ai";

const RevenueSection = () => {
  return (
    <section className="">
     <div className="flex justify-between my-5">
     <h3 className="flex gap-2">
        <p className="bg-[#F7CBFF] w-3 h-6"></p>
        <span className="text-lg font-semibold">Revenue stats</span>
      </h3>
      <div className="flex gap-16">
      <h3 className="flex gap-2">
        <p className="bg-[#C7EEFE] w-3 h-6"></p>
        <span className="text-lg font-semibold">Sell Progress</span>
      </h3>
       <Link href='/' className="text-[#B2C2EF]">view details</Link>
      </div>
       
     </div>

      <span className="flex items-center">
        <h4 className="text-2xl font-bold">$45,3343, k total revenue </h4>
        <p>(optional)</p>
      </span>
      <p className="flex">
        <span className="bg-[#EDFDE8] flex items-center w-24 rounded-xl ">
          <AiOutlineArrowUp  size={20} /> 22.3 %
        </span> vs previous work
      </p>
    </section>
  );
};

export default RevenueSection;
