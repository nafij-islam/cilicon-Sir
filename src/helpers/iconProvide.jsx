import {
  Facebook,
  HeartHandshake,
  Instagram,
  PrinterCheck,
  Search,
  ShoppingCart,
  Shredder,
  Twitter,
  UsersRound,
  Youtube,
} from "lucide-react";
import { CiLocationOn } from "react-icons/ci";
import { FaCcPaypal } from "react-icons/fa";
import { MdAutoFixHigh } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";



const icons = {
  tovNav: [
    {
      id: 1,
      name: Twitter,
      url: "https://lucide.dev/guide/packages/lucide-react",
    },
    {
      id: 2,
      name: Facebook,
      url: "https://lucide.dev/guide/packages/lucide-react",
    },
    {
      id: 3,
      name: PrinterCheck,
      url: "https://lucide.dev/guide/packages/lucide-react",
    },
    {
      id: 4,
      name: Shredder,
      url: "https://lucide.dev/guide/packages/lucide-react",
    },
    {
      id: 5,
      name: Youtube,
      url: "https://lucide.dev/guide/packages/lucide-react",
    },
    {
      id: 6,
      name: Instagram,
      url: "https://lucide.dev/guide/packages/lucide-react",
    },
  ],
  Search: Search,
  ShoppingCart,
  HeartHandshake,
  UsersRound,
  CiLocationOn,
  FaCcPaypal,
  MdAutoFixHigh,
  arrowRight: <FaArrowRightLong/>,
};

export { icons };
