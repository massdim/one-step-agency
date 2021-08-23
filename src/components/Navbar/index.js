import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../redux/action/account";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const openDropdown = useSelector((state) => state.general.openDropdown);
  const [count, setCount] = useState(0);
  const [invisible, setInvisible] = useState(true);

  const handleDropdown = (val) => {
    if (val === "account") {
      dispatch({
        type: "SET_OPEN_DROPDOWN",
        data: {
          account: !openDropdown.account,
          notification: false,
        },
      });
    } else {
      dispatch({
        type: "SET_OPEN_DROPDOWN",
        data: {
          account: false,
          notification: !openDropdown.notification,
        },
      });
    }
  };

  const handleBadgeVisibility = () => {
    setCount(count + 1);
    setInvisible(false);
    // setInvisible(!invisible);
  };

  const handleLogout = () => {
    dispatch(setLogout());
  };

  useEffect(() => {}, []);

  return (
    <nav className="bg-white shadow-lg">
      <div className="mx-10">
        <div className="flex justify-between">
          <div>
            <a
              href="#"
              className="flex items-center py-4 px-2 text-3xl text-dark font-semibold"
            >
              FIRSTEP
              {/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
            </a>
          </div>
          <div className="flex items-center">
            <>
              <div
                className="mr-6 cursor-pointer relative inline-block"
                onClick={() => handleDropdown("notification")}
              >
                <Badge
                  badgeContent={count}
                  color="primary"
                  // variant="dot"
                  invisible={invisible}
                >
                  <NotificationsIcon />
                </Badge>

                <div
                  className={`absolute ${
                    openDropdown.notification ? "block" : "hidden"
                  } top-13 right-0 w-80 h-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-0 z-10`}
                >
                  <div className="h-full">
                    <div className="pl-2 h-full overflow-y-auto overflow-x-hidden">
                      <a
                        href="#"
                        className="flex items-center px-2 py-3 border-b hover:bg-gray-100 -mx-2"
                      >
                        <img
                          className="w-10 h-10 object-cover mx-1"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                          alt="avatar"
                        />
                        <p className="text-gray-600 text-sm mx-2">
                          <span className="font-bold" href="#">
                            Sara Salah
                          </span>{" "}
                          replied on the{" "}
                          <span className="font-bold text-blue-500" href="#">
                            Upload Image
                          </span>{" "}
                          artical . 2m
                        </p>
                      </a>
                      <a
                        href="#"
                        className="flex items-center px-2 py-3 border-b hover:bg-gray-100 -mx-2"
                      >
                        <img
                          className="w-10 h-10 object-cover mx-1"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                          alt="avatar"
                        />
                        <p className="text-gray-600 text-sm mx-2">
                          <span className="font-bold" href="#">
                            Sara Salah
                          </span>{" "}
                          replied on the{" "}
                          <span className="font-bold text-blue-500" href="#">
                            Upload Image
                          </span>{" "}
                          artical . 2m
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="w-full">
                    <a
                      href="#"
                      className="block bg-gray-800 text-white text-center font-bold py-2   rounded-b-md"
                    >
                      See all notifications
                    </a>
                  </div>
                </div>
              </div>
            </>

            <div
              className="relative inline-block "
              onClick={() => handleDropdown("account")}
            >
              <button type="button" className="flex w-8 h-8">
                <img
                  className="h-full w-full object-cover rounded-full"
                  src="https://i.pinimg.com/474x/11/c4/2c/11c42ce581ec0f925813db45985bfbd7.jpg"
                  alt="avatar"
                />
              </button>
              <div
                className={`absolute ${
                  openDropdown.account ? "block" : "hidden"
                } top-12 right-0 w-56 h-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-3 mt-1 z-10`}
              >
                <Link
                  to="/account"
                  className="text-gray-700 hover:text-primary block px-4 py-2 text-md"
                >
                  Account settings
                </Link>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary block px-4 py-2 text-md"
                  onClick={() => handleLogout()}
                >
                  Sign Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={() => handleBadgeVisibility()}>click</button> */}
    </nav>
  );
};

export default Navbar;
