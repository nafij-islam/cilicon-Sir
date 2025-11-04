import Container from "@/components/commonComponents/Container";
import { icons } from "@/helpers/iconProvide";

const BottomNav = () => {
  return (
    <div className="py-3 border-b border-b-gray_100">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <div>
              <select
                name=""
                id=""
                className="bg-gray_50 px-5 py-2 focus:outline-0 body_sm_500 text-gray_500"
              >
                <option value="AllCategory">AllCategory</option>
                <option value="AllCategory">AllCategory</option>
                <option value="AllCategory">AllCategory</option>
                <option value="AllCategory">AllCategory</option>
                <option value="AllCategory">AllCategory</option>
              </select>
            </div>
            {/* userNavigation */}
            <div className="flex items-center gap-x-2">
              <div className="flex items-center gap-x-1 label3 text-gray_600">
                <icons.CiLocationOn size={20} />
                <span>Track Order</span>
              </div>

              <div className="flex items-center gap-x-1 label3 text-gray_600">
                <icons.CiLocationOn size={20} />
                <span>Compare</span>
              </div>

              <div className="flex items-center gap-x-1 label3 text-gray_600">
                <icons.CiLocationOn size={20} />
                <span>Customer Support</span>
              </div>
              <div className="flex items-center gap-x-1 label3 text-gray_600">
                <icons.CiLocationOn size={20} />
                <span>Need Help</span>
              </div>
            </div>
          </div>
          {/* contact */}
          <span className="label3 text-gray_600">+1-202-555-0104</span>
        </div>
      </Container>
    </div>
  );
}
export default BottomNav