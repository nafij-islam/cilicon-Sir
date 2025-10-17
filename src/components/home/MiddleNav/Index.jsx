import Button from "@/components/commonComponents/Button";
import Container from "@/components/commonComponents/Container";
import { icons } from "@/helpers/iconProvide";
import { imageProvider } from "@/helpers/imgProvider";
import { useState } from "react";

const MiddleNav = () => {
const [showSearchIcons, setshowSearchIcons] = useState(true)
  const { Search, ShoppingCart, HeartHandshake, UsersRound } = icons;
  const utisIcons = [
    {
      id: 1,
      to: "/cart",
      icon: ShoppingCart,
    },
    {
      id: 2,
      to: "/wishlist",
      icon: HeartHandshake,
    },
    {
      id: 2,
      to: "/user",
      icon: UsersRound,
    },
  ];
  /**
   * todo : handleTyping funtion implement
   * params: (events){} 
   * return : void
   */
  const handleTyping = (event)=> {
    if(event.target.value.length > 0) {
      setshowSearchIcons(false)
    }else{
      setshowSearchIcons(true);

    }
  }

  return (
    <div className="bg-secondary_700 py-5 border-t border-t-gray_300">
      <Container>
        <div className="flex items-center justify-between">
          <picture>
            <img
              src={imageProvider.logoMiddle}
              alt={imageProvider.logoMiddle}
            />
          </picture>
          {/* search */}
          <div className="relative">
            <input
              type="search"
              name=""
              id=""
              onChange={handleTyping}
              className="bg-gray_00 py-3 w-[700px] px-4 rounded placeholder:text-gray_300 placeholder:body_sm_400 focus:outline-0"
              placeholder="Search for anything..."
            />
            {showSearchIcons == true ? (
              <span className="text-gray_900 absolute right-5 top-1/2 -translate-y-1/2">
                <Search size={18} />
              </span>
            ) : null}

            {showSearchIcons == false && (
              <div className=" absolute right-12 top-1/2 -translate-y-1/2">
                <Button className={"bg-warning_400 py-1"}>
                  <span className="body_sm_400">Search</span>
                </Button>
              </div>
            )}
          </div>
          {/* all icons */}
          <div className="flex items-center gap-x-3">
            {utisIcons?.map(
              (icon) =>
                (icon.to === "/cart" ? (
                  <div className="relative">
                    <span className="text-gray_00">
                      <icon.icon />
                    </span>
                    <span className="absolute top-0 right-2 w-6 h-6 bg-gray_00 rounded-full flex justify-center items-center body_sm_400">
                      1
                    </span>
                  </div>
                ) : (
                  <span className="text-gray_00">
                    <icon.icon />
                  </span>
                ))
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
export default MiddleNav