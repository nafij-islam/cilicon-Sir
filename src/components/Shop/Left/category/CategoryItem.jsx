import { Virtuoso } from "react-virtuoso";
const CategoryItemList = ({ cItem = [] ,Categoryfn }) => {
  
  return (
    <div>
      <Virtuoso
        style={{ height: "50vh" }}
        data={cItem}
        className="customscrollbar"
        itemContent={(_, item) => (
          <div
            style={{
              padding: "0.5rem",
            }}
          >
            <div
              className="flex items-center gap-x-2  cursor-pointer"
              key={item}
              onClick={()=>Categoryfn(item)}
            >
              <input
                type="radio"
                id={item}
                name="citem"
                className="w-5 h-5 bg-primary_500"
              />
              <label
                for={item}
                name="citem"
                className="body_sm_400 text-gray_600"
              >
                {item || "Computer Accessories"}
              </label>
            </div>
          </div>
        )}
      />
      
    </div>
  );
};

export default CategoryItemList;
