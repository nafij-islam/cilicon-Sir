const BestSelllingProductConent = ({ productList, title }) => {
 

  return (
    <div>
      <div className="flex flex-col gap-y-4">
        <h2 className="body_md_600 text-gray_900 mb-5 uppercase">{title}</h2>
        {/* product details */}
        {productList.map((p) => (
          <div className="grid grid-cols-[30%70%] items-center border border-gray_50 rounded py-2 px-3">
            <img
              loading="lazy"
              src={p.images[0]}
              alt=""
              className="w-[80px] h-[80px] object-center object-cover rounded bg-blend-color-dodge "
            />
            <div>
              <h3 className="body_sm_400 text-gray_900 w-fit truncate">
                {p.title}
              </h3>
              <p className="body_sm_600 text-secondary_500">${p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelllingProductConent;
