import { imageProvider } from "@/helpers/imgProvider";
import Button from "@components/commonComponents/Button.jsx";
import Container from "@components/commonComponents/Container.jsx";
import { MoveRight } from "lucide-react";
import React from "react";
const Header = () => {
  return (
    <div className="bg-gray-900 py-[18px]">
      <Container>
        <div className="flex items-center  justify-between">
          {/* picture */}
          <picture>
            <img src={imageProvider.logo} alt={imageProvider.logo} />
          </picture>
          {/* middle offer */}
          <div className="flex items-center gap-x-4">
            <h3 className="label3 text-gray_00">Up to</h3>
            <span className="display4 text-warning_500">59%</span>
            <h3 className="body_xl_600 text-gray_00">OFF</h3>
          </div>
          {/* button */}
          <Button className={"bg-warning_500"}>
            <span className="heading7 text-gray_900 flex items-center gap-x-2">
              Shop now <MoveRight />
            </span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
export default React.memo(Header) || Header;