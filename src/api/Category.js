
import instance from "./axios";
const getCategory = async () => {
    try {
        const { data, status, statusText } = await instance.get('/products/category-list');
        return { data, status, statusText }
    } catch (error) {
        console.error('Category network request Failed ', error);
    }
}

const getAllProduct = async () => {
    try {
        const { data, status, statusText } = await instance.get(
            "/products"
        );
        return { data, status, statusText };
    } catch (error) {
        console.error("Product network request Failed ", error);
    }
}

// get product by category
const getProductbyCategory = async (categoryName = "furniture") => {
    try {
        const { data, status, statusText } = await instance.get(
            `/products/category/${categoryName}`
        );

        return { data, status, statusText };
    } catch (error) {
        console.error("Product network request Failed ", error);
        throw error;
    }
};

// get product using skip and limit wise
const getProductbyLimit = async (  ) => {
    try {
        const { data, status, statusText } = await instance.get(
            `/products?limit=12&skip=0`
        );
      
        return { data, status, statusText };
    } catch (error) {
        console.error("Product network request Failed ", error);
        throw error;
    }
};
const SingleProduct = async ( id ) => {
    try {
        const { data, status, statusText } = await instance.get(
            `/products/${id}`
        );
      
        return { data, status, statusText };
    } catch (error) {
        console.error("Product network request Failed ", error);
        throw error;
    }
};
export { getAllProduct, getCategory, getProductbyCategory, getProductbyLimit, SingleProduct };

