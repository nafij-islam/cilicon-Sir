
const ErrorPage = ({ message = "Something went wrong.", onRefetch = ()=>{} }) => {
  return (
    <div>
      
        <div className="flex flex-col items-center justify-center py-10 bg-gray-100 text-gray-800 font-sans">
      <h1 className="text-3xl font-bold mb-2">⚠️ Error</h1>
      <p className="text-lg mb-6 text-center max-w-md">{message}</p>
      <button
        onClick={onRefetch}
        className="px-5 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200"
      >
        🔄 Try Again
      </button>
    </div>
  
    </div>
  );
};

export default ErrorPage;
