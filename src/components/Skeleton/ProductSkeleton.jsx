const ProductSkeleton = () => {
     return (
          <div className="p-5 border border-gray_50 max-w-[245px] rounded animate-pulse">
               <div className="flex flex-col items-start justify-start gap-y-3">
                    {/* HOT badge placeholder */}
                    <div className="w-[50px] h-[24px] bg-gray-200 rounded"></div>

                    {/* Image placeholder */}
                    <div className="w-[202px] h-[172px] bg-gray-200 rounded-md"></div>

                    {/* Rating placeholder */}
                    <div className="flex items-center gap-x-2">
                         <div className="w-[80px] h-[16px] bg-gray-200 rounded"></div>
                         <div className="w-[30px] h-[14px] bg-gray-200 rounded"></div>
                    </div>

                    {/* Title placeholder */}
                    <div className="w-full h-[18px] bg-gray-200 rounded"></div>

                    {/* Price placeholder */}
                    <div className="flex items-center gap-x-2">
                         <div className="w-[40px] h-[16px] bg-gray-200 rounded"></div>
                         <div className="w-[60px] h-[18px] bg-gray-200 rounded"></div>
                    </div>
               </div>
          </div>
     );
};

export default ProductSkeleton;
