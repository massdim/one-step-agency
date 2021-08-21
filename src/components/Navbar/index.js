import React, { useState, useEffect } from "react";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Navbar = () => {
  const [openNotification, setOpenNotification] = useState(false);
  const [openDropdown, setOpenDropdown] = useState({
    account: false,
    notification: false,
  });

  const [count, setCount] = useState(0);
  const [invisible, setInvisible] = useState(true);

  const handleDropdown = (val) => {
    if (val === "account") {
      setOpenDropdown({
        account: !openDropdown.account,
        notification: false,
      });
    } else {
      setOpenDropdown({
        account: false,
        notification: !openDropdown.notification,
      });
    }
  };

  const handleBadgeVisibility = () => {
    setCount(count + 1);
    setInvisible(false);
    // setInvisible(!invisible);
  };

  useEffect(() => {
    // setInvisible(count > 0 ? false : true);
    return () => {
      // Anything in here is fired on component unmount.
      setOpenDropdown({
        account: false,
        notification: false,
      });
    };
  }, []);

  return (
    <nav class="bg-white shadow-lg">
      <div class="mx-10">
        <div class="flex justify-between">
          <div>
            <a
              href="#"
              class="flex items-center py-4 px-2 text-3xl text-dark font-semibold"
            >
              FIRSTEP
              {/* <img src="logo.png" alt="Logo" class="h-8 w-8 mr-2" /> */}
            </a>
          </div>
          <div class="flex items-center">
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
                  } top-12 right-0 w-80 h-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-0`}
                >
                  <div className="relative h-full">
                    <div className="ml-2 h-full overflow-y-auto">
                      <a
                        href="#"
                        class="flex items-center px-2 py-3 border-b hover:bg-gray-100 -mx-2"
                      >
                        <img
                          class="w-10 h-10 object-cover mx-1"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                          alt="avatar"
                        />
                        <p class="text-gray-600 text-sm mx-2">
                          <span class="font-bold" href="#">
                            Sara Salah
                          </span>{" "}
                          replied on the{" "}
                          <span class="font-bold text-blue-500" href="#">
                            Upload Image
                          </span>{" "}
                          artical . 2m
                        </p>
                      </a>
                      <a
                        href="#"
                        class="flex items-center px-2 py-3 border-b hover:bg-gray-100 -mx-2"
                      >
                        <img
                          class="w-10 h-10 object-cover mx-1"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                          alt="avatar"
                        />
                        <p class="text-gray-600 text-sm mx-2">
                          <span class="font-bold" href="#">
                            Sara Salah
                          </span>{" "}
                          replied on the{" "}
                          <span class="font-bold text-blue-500" href="#">
                            Upload Image
                          </span>{" "}
                          artical . 2m
                        </p>
                      </a>
                      <a
                        href="#"
                        class="flex items-center px-2 py-3 border-b hover:bg-gray-100 -mx-2"
                      >
                        <img
                          class="w-10 h-10 object-cover mx-1"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                          alt="avatar"
                        />
                        <p class="text-gray-600 text-sm mx-2">
                          <span class="font-bold" href="#">
                            Sara Salah
                          </span>{" "}
                          replied on the{" "}
                          <span class="font-bold text-blue-500" href="#">
                            Upload Image
                          </span>{" "}
                          artical . 2m
                        </p>
                      </a>
                      <a
                        href="#"
                        class="flex items-center px-2 py-3 border-b hover:bg-gray-100 -mx-2"
                      >
                        <img
                          class="w-10 h-10 object-cover mx-1"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                          alt="avatar"
                        />
                        <p class="text-gray-600 text-sm mx-2">
                          <span class="font-bold" href="#">
                            Sara Salah
                          </span>{" "}
                          replied on the{" "}
                          <span class="font-bold text-blue-500" href="#">
                            Upload Image
                          </span>{" "}
                          artical . 2m
                        </p>
                      </a>
                    </div>

                    <div className="absolute bottom-0 w-full">
                      <a
                        href="#"
                        class="block bg-gray-800 text-white text-center font-bold py-2   rounded-b-md"
                      >
                        See all notifications
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>

            <div
              className="relative inline-block "
              onClick={() => handleDropdown("account")}
            >
              <button type="button" class="flex w-8 h-8">
                <img
                  class="h-full w-full object-cover rounded-full"
                  src="https://i.pinimg.com/474x/11/c4/2c/11c42ce581ec0f925813db45985bfbd7.jpg"
                  alt="avatar"
                />
              </button>
              <div
                className={`absolute ${
                  openDropdown.account ? "block" : "hidden"
                } top-12 right-0 w-56 h-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-3 mt-1`}
              >
                <a
                  href="#"
                  class="text-gray-700 hover:text-primary block px-4 py-2 text-md"
                >
                  Account settings
                </a>
                <a
                  href="#"
                  class="text-gray-700 hover:text-primary block px-4 py-2 text-md"
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
