import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { RiRemoteControlLine } from "react-icons/ri";
import { SiDcentertainment } from "react-icons/si";

const Cards = () => {
  return (
    <main className="mt-10">
      <div className="text-center">
        <h4 className="text-blue-400  font-bold text-lg capitalize">
          simple shop
        </h4>
        <h3 className="md:text-3xl text-2xl mb-8  text-blue-600 capitalize font-semibold">
          what is the difference from the others
        </h3>
      </div>
      <section className="md:grid md:grid-cols-3 gap-5 ">
        <section>
          <div className="card h-96 bg-base-100  shadow-2xl  ">
            <div className="card-body items-center  text-center md:mt-20 mt-10">
              <span className="card-title">
                <RiRemoteControlLine size={30} />
              </span>
              <h2 className="card-title font-bold capitalize"> remote works</h2>
              <p className="capitalize">
                anywhere in the world you work remotely 100 % .
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="card h-96 bg-base-100  shadow-2xl my-5 md:my-0 ">
            <div className="card-body items-center  text-center md:mt-20 mt-10">
              <span className="card-title">
                <BsFillRocketTakeoffFill size={30} />
              </span>
              <h2 className="card-title font-bold capitalize"> high salary</h2>
              <p className="capitalize">
                this company will you give a high salary for your position{" "}
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="card  h-96 bg-base-100  shadow-2xl  ">
            <div className="card-body items-center  text-center md:mt-20 mt-10">
              <span className="card-title">
                <SiDcentertainment size={30} />
              </span>
              <h2 className="card-title font-bold capitalize"> holidays </h2>
              <p className="capitalize">
                two days weekends and five days works .
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Cards;
