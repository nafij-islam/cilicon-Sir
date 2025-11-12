import produtVariantBanner from "@assets/allproductBanner.png";
import bannerthree from "@assets/banner.png";
import bannerOne from "@assets/bannerOne.png";
import bannertwo from "@assets/bannertwo.png";
import logo from "@assets/logo.png";
import logoMiddle from "@assets/LogoMiddle.png";
import Google from "@assets/googleFooter.png";
import Apple from "@assets/appleFooter.png";
import FooterLogo from "@assets/footerLogo.png";

const imageProvider = {
  logo,
  logoMiddle,
  bannerOne,
  bannertwo,
  bannerthree,
  produtVariantBanner,
  footerImages: [
    { id: 1, src: FooterLogo, alt: "footerlogo" },
    { id: 2, src: Google, alt: "footerImages" },
    { id: 3, src: Apple, alt: "footerImages" },
  ],
};
export { imageProvider };
