const CategoryItem = ({item}) => {
  return (
    <div>
      <div className="border border-gray_50 py-5 ">
        <div className="flex flex-col justify-center items-center gap-y-5">
          <picture>
            <img
              className="rounded max-w-[148px] max-h-[148px]"
              src="https://images.pexels.com/photos/33771131/pexels-photo-33771131.jpeg"
              alt=""
            />
          </picture>
          <h2 className="body_md_500  text-gray_900">{item || "N/A"}</h2>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
