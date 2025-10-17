import PropTypes from "prop-types";
const Container = ({ children }) => {
  return <div className="max-w-[1320px] m-auto bg-primary-400">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired, 
};
export default Container;


