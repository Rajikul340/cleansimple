import { FaCompactDisc } from "react-icons/fa";
import { GiAbstract107 , GiDiceFire} from "react-icons/gi";

const ContentPage = () => {
  return (
    <section className=" ">
      <div className="flex gap-5">
         <p className="bg-[#FFCFC2] w-2 h-6 "></p>
        <h3 className="text-lg font-semibold mb-3">Listing Overview </h3>
        <div>
          <select className="select select-bordered select-xs w-full max-w-xs">
            <option disabled selected>
               last 7 days
            </option>
            <option>Tiny Apple</option>
            <option>Tiny Orange</option>
            <option>Tiny Tomato</option>
          </select>
        </div>
      </div>

      <div className="stats bg-[#F3FBFF] md:mr-1 ">
        <div className="stat ">
          <div className="stat-title flex gap-2">
            <span className="w-8 h-8 bg-[#C7EDFA] rounded-full ">
              <FaCompactDisc
                className="mx-auto mt-1"
                size={20}
                color="#5A3985"
              />
            </span>{" "}
            <p className="">Active Listing</p>
          </div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc text-center mt-2 ">705 last week </div>
        </div>
      </div>

      <div className="stats bg-[#FEF5F8] md:mr-1 ">
        <div className="stat ">
          <div className="stat-title flex gap-2">
            <span className="w-8 h-8 bg-[#FCC2DB] rounded-full ">
              <GiAbstract107
                className="mx-auto mt-1"
                size={20}
                color="#A133A2"
              />
            </span>{" "}
            <p className="">Draft Listing</p>
          </div>
          <div className="stat-value">586</div>
          <div className="stat-desc text-center mt-2 ">75 this week </div>
        </div>
      </div>

      <div className="stats bg-[#FFF0EC] md:mr-1 ">
        <div className="stat ">
          <div className="stat-title flex gap-2">
            <span className="w-8 h-8 bg-[#FFCFBE] rounded-full ">
              <GiDiceFire
                className="mx-auto mt-1"
                size={20}
                color="#F68F30"
              />
            </span>{" "}
            <p className="">Explained Listings</p>
          </div>
          <div className="stat-value">490</div>
          <div className="stat-desc text-center mt-2 ">705 last week </div>
        </div>
      </div>

      <div className="stats bg-[#FFFCF1] md:mr-1 ">
        <div className="stat ">
          <div className="stat-title flex gap-2">
            <span className="w-8 h-8 bg-[#FFDEB8] rounded-full ">
              <FaCompactDisc
                className="mx-auto mt-1"
                size={20}
                color="#FD846D"
              />
            </span>{" "}
            <p className="">Inactive Listing</p>
          </div>
          <div className="stat-value">302</div>
          <div className="stat-desc text-center mt-2 ">30 this week </div>
        </div>
      </div>

      <div className="stats bg-[#FEF3FF] md:mr-1 ">
        <div className="stat ">
          <div className="stat-title flex gap-2">
            <span className="w-8 h-8 bg-[#EDB5EC] rounded-full ">
              <FaCompactDisc
                className="mx-auto mt-1"
                size={20}
                color="#A0406E"
              />
            </span>{" "}
            <p className="">Sold Out</p>
          </div>
          <div className="stat-value">689</div>
          <div className="stat-desc text-center mt-2 ">50 this week </div>
        </div>
      </div>

    
   
    </section>
  );
};

export default ContentPage;
