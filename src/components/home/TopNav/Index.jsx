import Container from "@/components/commonComponents/Container";
import { icons } from "@/helpers/iconProvide";

const TopNav = () => {
    const { tovNav } = icons;
  
  return (
    <div className="bg-secondary_700 py-4">
      <Container>
        <div className="flex justify-between items-center">
          <h2 className="label3 text-gray_00">
            Welcome to Clicon online eCommerce store.{" "}
          </h2>
          <div className="flex items-center gap-x-3">
            <h2 className="body_sm_400 text-gray_00">Follow us:</h2>
            <div className="flex gap-x-1.5 ">
              {tovNav.map((item) => (
                <span key={item.id} className="cursor-pointer">
                  {<item.name size={18} color="#FFFFFF" />}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default TopNav