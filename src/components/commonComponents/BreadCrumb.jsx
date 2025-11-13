import { Home } from "lucide-react";
import { Link, useLocation } from "react-router";
import Container from "./Container";

export const BreadCrumb = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const paths = pathname.split("/").filter((path) => path);

  return (
    <div className="bg-gray_50 py-6">
      <Container>
        <div className="flex items-center flex-wrap gap-x-2 text-sm">
          {/* Home Link */}
          <Link
            to="/"
            className="bg-green-500 px-2 py-1 rounded-sm text-white font-popins"
          >
            <span className="flex items-center gap-x-2">
              <Home />
              Home
            </span>
          </Link>

          {/* Dynamic Paths */}
          {paths.map((name, index) => {
            // const route = "/" + paths.slice(0, index + 1).join("/");
            const route = "/" + name;
            const isLast = index + 1 === paths.length;

            return (
              <div key={route} className="flex items-center gap-x-2">
                <span className="text-xl text-gray-500">/</span>
                {isLast ? (
                  <span className="bg-purple-400 text-white font-popins px-2 py-1 rounded-sm capitalize">
                    {name}
                  </span>
                ) : (
                  <Link
                    to={route}
                    className="bg-blue-500 px-2 py-1 rounded-sm text-white font-popins capitalize hover:bg-blue-600 transition-colors"
                  >
                    {name}
                  </Link>
                )}
              </div>
              // <div className="bg-red-400 p-2">
              //     <Link to={`/${name}`}>
              //     {name}
              //     </Link>
              // </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
