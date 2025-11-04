import Container from "@/components/commonComponents/Container";
import { icons } from "@/helpers/iconProvide";
import { useState } from "react";

const Features = () => {
  const { CiLocationOn, FaCcPaypal, MdAutoFixHigh } = icons;
  const [data, setdata] = useState([
    {
      id: 1,
      icon: CiLocationOn ,
      tilte: "Fasted Delivery",
      description: "Delivery in 24/H",
    },
    {
      id: 2,
      icon: FaCcPaypal,
      tilte: "24 Hours Return",
      description: "Delivery in 24/H",
    },
    {
      id: 1,
      icon: MdAutoFixHigh ,
      tilte: "Secure Payment",
      description: "Delivery in 24/H",
    },
    {
      id: 1,
      icon: CiLocationOn ,
      tilte: "Fasted Delivery",
      description: "Delivery in 24/H",
    },
  ]);
  return (
    <div className="pb-20">
      <Container>
        <div className="border border-gray_100 grid grid-cols-4 py-5 rounded px-4">
          {data?.map((item) => (
            <div className="flex items-center gap-x-2 border-r border-r-gray_100 px-5">
              <span>
                <item.icon color="text-gray_600" size={40}  />
              </span>
              <div>
                <h1 className="label3 text-gray_900">{item.tilte}</h1>
                <p className="body_sm_400 text-gray_600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Features;
