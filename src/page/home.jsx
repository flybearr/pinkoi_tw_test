import "../style/home.scss";
import { Link } from "react-router-dom";
import Slider from "../component/slider";
import ProdList from "../component/prod-list";
import Help from "../component/help";
export default function Home() {
  return (
    <div className="w-full relative">
      <div className="laptop:w-4/5  tablet:w-full mt-5 mx-auto">
        <header className="header-wrap mx-auto w-full flex justify-end items-center">
          <Link to={"/123"} className="mark-wrap w-1/6 ">
            <svg
              height="34"
              viewBox="0 0 82 24"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <path
                d="M36.019 5.4a5.95 5.95 0 0 1 5.95 5.95v6.639c0 .258-.21.468-.469.468h-2.038a.469.469 0 0 1-.468-.468V11.35a2.975 2.975 0 0 0-5.95 0v6.639c0 .258-.21.468-.47.468h-2.037a.469.469 0 0 1-.468-.468V5.36c0-.309.292-.533.59-.453l2.037.546c.205.055.347.24.347.452v.297A5.917 5.917 0 0 1 36.02 5.4zm15.872 5.21l7.048 7.048c.295.295.086.8-.331.8h-2.689a.937.937 0 0 1-.662-.275l-5.355-5.355v5.16c0 .26-.21.47-.469.47h-2.038a.469.469 0 0 1-.468-.47V.469c0-.307.292-.532.59-.452l2.038.546c.205.055.347.24.347.453v7.377l3.213-3.213a.937.937 0 0 1 .662-.274h2.915c.334 0 .501.403.265.64zm15.814 5.258a4.104 4.104 0 1 0 0-8.209 4.104 4.104 0 0 0 0 8.21zm0-11.137a7.033 7.033 0 1 1 0 14.065 7.033 7.033 0 0 1 0-14.065zm-57.972.071a6.827 6.827 0 0 1 6.778 6.778c.027 3.783-3.165 6.877-6.948 6.877H7.92a.469.469 0 0 1-.469-.468V15.89c0-.259.21-.468.469-.468h1.68c2.086 0 3.846-1.649 3.878-3.735a3.793 3.793 0 0 0-3.852-3.851c-2.085.031-3.734 1.792-3.734 3.878v6.574a6.817 6.817 0 0 1-2.744 5.471.944.944 0 0 1-1.038.067L.176 22.71c-.26-.15-.226-.538.058-.634 1.522-.518 2.623-2.018 2.623-3.788V11.75c0-3.782 3.094-6.975 6.876-6.948zm14.534.652c.205.055.347.24.347.453v12.082c0 .258-.21.468-.468.468h-2.038a.469.469 0 0 1-.469-.468V5.36c0-.309.292-.533.59-.453zm57.351 0c.205.055.348.24.348.453v12.082c0 .258-.21.468-.469.468H79.46a.469.469 0 0 1-.468-.468V5.36c0-.309.292-.533.59-.453z"
                fill="#003354"
              ></path>
            </svg>
          </Link>
          <div className="mid-area w-3/6 ">
            <div className="mid-area-wrap w-4/5 flex flex-col">
              <div className="search-bar w-full flex">
                <input
                  type="text"
                  placeholder="搜尋好設計、體驗活動"
                  className="w-96 h-10 rounded-l-lg border-2 border-gray-300  px-3 focus:outline-sky-700"
                />
                <div className="search-icon w-16 h-10 rounded-r-lg bg-sky-800 hover:bg-sky-950 hover:cursor-pointer flex justify-center items-center">
                  <i className="fa-solid fa-magnifying-glass text-white text-lg"></i>
                </div>
              </div>
              <div className="tag w-full flex justify-start gap-4 text-sm mt-2 overflow-hidden">
                <Link to={"123"} className="hover:text-blue-500">
                  新館開幕
                </Link>
                <Link to={"123"} className="hover:text-blue-500">
                  新館開幕
                </Link>
                <Link to={"123"} className="hover:text-blue-500">
                  新館開幕
                </Link>
                <Link to={"123"} className="hover:text-blue-500">
                  新館開幕
                </Link>
                <Link to={"123"} className="hover:text-blue-500">
                  新館開幕
                </Link>
              </div>
            </div>
          </div>
          <div className="right-area w-2/6 flex gap-5 items-center">
            <Link to={"/123"} className="mr-5 text-sm">
              我想在pinkoi上販售
            </Link>
            <Link
              to={"/123"}
              className="w-24 text-center border-2 border-gray-400 rounded-sm p-1 hover:border-sky-400 hover:text-sky-400"
            >
              登入/註冊
            </Link>
            <Link>
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <Link to={"123"}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.7162 5.29C18.5534 2.47889 15.2908 1 11.9916 1C9.6577 1 7.29936 1.74556 5.29539 3.28556C0.480952 6.98889 -0.423282 13.8944 3.27919 18.71C5.45424 21.5211 8.71681 23 12.016 23C14.3499 23 16.7083 22.2544 18.7123 20.7144C23.5267 17.0111 24.4187 10.1056 20.7162 5.29Z"
                  fill="#F7B82B"
                ></path>
                <path
                  d="M12.0038 20.2623C11.2951 20.2623 10.5864 20.1767 9.87763 19.9812C8.26467 19.5534 6.82279 18.6489 5.74748 17.3778C5.61307 17.2189 5.63751 16.9867 5.78414 16.8645C5.93077 16.73 6.16294 16.7545 6.29735 16.9012C7.28712 18.0623 8.5946 18.8812 10.0609 19.2723C14.0689 20.3356 18.199 17.9523 19.2743 13.9434C19.8731 11.6945 19.421 9.32338 18.0035 7.4656C17.8813 7.30671 17.918 7.07449 18.0768 6.95227C18.2357 6.83005 18.4679 6.86671 18.59 7.0256C20.1297 9.06671 20.6429 11.6578 19.9831 14.1389C18.9933 17.8178 15.6452 20.2623 12.0038 20.2623Z"
                  fill="white"
                ></path>
                <path
                  d="M12.6025 7.24559C10.8918 7.3067 9.57207 8.79781 9.63316 10.4967L9.75536 13.43C9.79202 14.2245 9.32768 14.9211 8.64339 15.1778C8.5212 15.2267 8.50898 15.3978 8.63117 15.4589L9.52319 15.9234C9.66982 15.9967 9.85311 15.9845 9.98753 15.8745C10.7085 15.2878 11.1606 14.3711 11.1117 13.3689L10.9895 10.4111C10.9651 9.48225 11.6738 8.66337 12.6025 8.61448C13.5678 8.55337 14.3743 9.31114 14.4109 10.2767C14.4354 11.2178 13.6778 11.9878 12.7369 12.0245L11.9793 12.0489C11.8571 12.0489 11.7716 12.1467 11.7716 12.2689L11.8082 13.21C11.8082 13.3323 11.906 13.4178 12.0282 13.4178L12.7613 13.3811C14.4598 13.3078 15.8406 11.8534 15.7551 10.1545C15.694 8.49225 14.2765 7.18448 12.6025 7.24559Z"
                  fill="white"
                ></path>
              </svg>
            </Link>
          </div>
        </header>
        <nav className="NavList mt-5 px-14 pb-4 ">
          <ul className="flex gap-4 text-sm justify-between">
            {[
              "主題企劃",
              "配件飾品",
              "包包提袋",
              "居家生活",
              "主題企劃",
              "配件飾品",
              "包包提袋",
              "居家生活",
            ].map((v, i) => {
              return (
                <li key={v + i}>
                  <span>{v}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <Slider />
      <div className="w-4/5 mx-auto">
        <ProdList />
      </div>
      <Help />
    </div>
  );
}
