import { icons } from "@/helpers/iconProvide";
import { imageProvider } from "@/helpers/imgProvider";
import React, { useState } from "react";
import Container from "./Container";

const Footer = () => {
  //import icon form rightArrow
  const { arrowRight } = icons;

  
  //import images from allimages object
  // const { footerImages:footerLogoIcon } = imageProvider;
  const { footerImages } = imageProvider;
  // here, all footer nav tab contorl by useState

  ///////////////////////
  /// for category nav
  //////////////////////
  let [category, setCategory] = useState([
    { id: 1, name: "Computer & Laptop" },
    { id: 2, name: "SmartPhone" },
    { id: 3, name: "Headphone" },
    { id: 4, name: "Accessories" },
    { id: 5, name: "Camera & Photo" },
    { id: 6, name: "TV & Homes" },
    { id: 7, name: "Browse All Product" },
  ]);

  ///////////////////
  /// for Link nav
  //////////////////

  let [link, setLink] = useState([
    { id: 1, name: "Shop Product" },
    { id: 2, name: "Shoping Cart" },
    { id: 3, name: "Wishlist" },
    { id: 4, name: "Compare" },
    { id: 5, name: "Track Order" },
    { id: 6, name: "Customer Help" },
    { id: 7, name: "About Us" },
  ]);

  /////////////////////////
  /// for footer Button
  ////////////////////////

  let [btn, setBtn] = useState([
    { id: 1, name: "Game" },
    { id: 2, name: "iPhone" },
    { id: 3, name: "TV" },
    { id: 4, name: "Asus Laptops" },
    { id: 5, name: "SSD " },
    { id: 6, name: "Graphics Card " },
    { id: 7, name: "Power Bank " },
    { id: 8, name: "Smart TV" },
    { id: 9, name: "Speaker" },
    { id: 10, name: "Tablet" },
    { id: 11, name: "Microwave" },
    { id: 12, name: "Samsung" },
  ]);

  return (
    <div className="bg-gray_900">
      <div className="py-[72px]">
        <Container>
          <div className="grid grid-cols-7 gap-x-6">
            <div className=" col-span-2  ">
              <picture>
                <img
                  src={footerImages[0].src}
                  alt={footerImages[0].alt}
                  className="w-[177px]"
                />
              </picture>
              <div className="pt-6 flex flex-col gap-y-3">
                <div className="flex flex-col gap-1">
                  <p className="sm_400  text-gray_500">Customer Supports:</p>
                  <p className="lg_500 text-gray_00">(629) 555-0129</p>
                </div>
                <div className="flex">
                  <p className="md_400  text-gray_300 w-[248px]">
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </p>
                </div>
                <p className="md_5  00 text-gray_00">info@kinbo.com</p>
              </div>
            </div>
            <div className="">
              <h2 className="labe2 text-gray_00 mb-3">Top Category </h2>
              <ul className="flex flex-col gap-y-[8px]">
                {category.map((items, index) => {
                  return items.name === "Browse All Product" ? (
                    <li
                      className="flex items-center gap-x-[10px] text-warning_500"
                      key={items.id}
                    >
                      <span className="sm_500 ">Browse All Product</span>
                      <span className="text-lg">{arrowRight } </span>
                    </li>
                  ) : (
                    <li
                      className="group  flex items-center gap-x-2 cursor-pointer relative overflow-hidden "
                      key={items.id}
                    >
                      <span className="text-[33px] bg-warning_500  absolute left-[-40px] group-hover:left-0  transition-all duration-300 ease-in-out w-[30px] h-[3px] rounded"></span>
                      <span className=" sm_500 text-gray_400 group-hover:text-gray_00 transition-all duration-300   transfrom  group-hover:translate-x-[36px] whitespace-nowrap">
                        {items.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="">
              <h2 className="labe2 text-gray_00 mb-3">Quick links </h2>
              <ul className="flex flex-col gap-y-[8px]">
                {link.map((items, index) => {
                  return (
                    <li
                      className="group  flex items-center gap-x-2 cursor-pointer relative overflow-hidden"
                      key={items.id}
                    >
                      <span className="text-[33px] bg-warning_500  absolute left-[-40px] group-hover:left-0  transition-all duration-300 ease-in-out w-[30px] h-[3px] rounded"></span>
                      <span className=" sm_500 text-gray_400 group-hover:text-gray_00 transition-all duration-300   transfrom  group-hover:translate-x-[36px] whitespace-nowrap">
                        {items.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="">
              <h2 className="labe2 text-gray_00 mb-3">Download APP</h2>
              <div className="flex flex-col gap-y-3">
                {footerImages.map((items) => {
                  return items.id === 1 ? null : (
                    <picture className="cursor-pointer" key={items.id}>
                      <img
                        src={items.src}
                        alt="footerAppstoreBannar"
                        className="w-full h-[70px] object-cover "
                      />
                    </picture>
                  );
                })}
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="labe2 text-gray_00 mb-3">Popular Tag</h2>
              <div className="flex gap-2 flex-wrap">
                {btn.map((items, index) => {
                  return (
                    <button
                      className="cursor-pointer sm_500 text-gray_00 border border-gray_800  hover:bg-gray_800 hover:border-gray_00  transition duration-300 ease-in-out py-[6px] px-3 border rounded"
                      key={items.id}
                    >
                      {items.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* show copyright text */}
      <div className="py-6 border-t border-gray_600 text-center">
        <p className="sm_400 text-gray_300">
          Kinbo - eCommerce Template © 2025. Design by Templatecookie modify by
          wasim
        </p>
      </div>
   
    </div>
  );
};

export default Footer;
