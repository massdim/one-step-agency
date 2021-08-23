import React from "react";
import { Breadcrumbs } from "../../components";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import PersonIcon from "@material-ui/icons/Person";
import PeopleIcon from "@material-ui/icons/People";

const Dashboard = () => {
  return (
    <>
      <Breadcrumbs breadcrumbs={[{ title: "Dashboard", path: "/" }]} />
      <div class="flex flex-wrap mb-2">
        <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
          <div class="bg-green-600 border rounded shadow p-2">
            <div class="flex flex-row items-center">
              <div class="flex-shrink pl-1 pr-4">
                <AccountBalanceWalletIcon />
                {/* <i class="fa fa-wallet fa-2x fa-fw fa-inverse"></i> */}
              </div>
              <div class="flex-1 text-right">
                <h5 class="text-white">Total Orders</h5>
                <h3 class="text-white text-3xl">
                  3249
                  <span class="text-green-400">
                    <i class="fas fa-caret-down"></i>
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2">
          <div class="bg-yellow-600 border rounded shadow p-2">
            <div class="flex flex-row items-center">
              <div class="flex-shrink pl-1 pr-4">
                <PersonIcon />
                {/* <i class="fas fa-users fa-2x fa-fw fa-inverse"></i> */}
              </div>
              <div class="flex-1 text-right">
                <h5 class="text-white">Total Talents</h5>
                <h3 class="text-white text-3xl">
                  13{" "}
                  <span class="text-blue-400">
                    <i class="fas fa-caret-up"></i>
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2">
          <div class="bg-blue-600 border rounded shadow p-2">
            <div class="flex flex-row items-center">
              <div class="flex-shrink pl-1 pr-4">
                <PeopleIcon />
              </div>
              <div class="flex-1 text-right">
                <h5 class="text-white">Total Users</h5>
                <h3 class="text-white text-3xl">
                  13{" "}
                  <span class="text-blue-400">
                    <i class="fas fa-caret-up"></i>
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
