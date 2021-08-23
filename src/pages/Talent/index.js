import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { talentAPI } from "../../api";
import { Breadcrumbs, PaginationComp } from "../../components";

const Talent = () => {
  const history = useHistory();
  const [data, setData] = useState({});

  const [filter, setFilter] = useState({
    search: " ",
    sort: " ",
    page: 1,
  });

  const handleSearch = (value) => {
    setFilter({
      ...filter,
      search: value,
    });
  };

  const getAll = async () => {
    const res = await talentAPI.getAll(filter.page, filter.search);

    if (res.status === 200) {
      setData(res.data);
    }
  };

  const handleGo = () => {
    history.push("/talents/add");
  };

  useEffect(() => {
    getAll();
  }, [filter]);

  return (
    <>
      <Breadcrumbs breadcrumbs={[{ title: "Talent", path: "/talents" }]} />
      {data.talents && data.talents.length > 0 && (
        <div className="h-104 relative px-6 py-6 rounded-lg bg-white shadow-lg">
          <div className="flex justify-between mb-3">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 border border-blue-700 rounded"
              onClick={() => handleGo()}
            >
              Add Talent
            </button>

            <div className="w-80">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Search.."
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSearch(e.target.value);
                  }
                }}
              />
            </div>

            <div className="w-40">
              <select
                name=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Sort by</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col h-full">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg ring-1 ring-gray-300">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Fullname
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Age
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Nationality
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {data.talents.map((talent) => {
                        return (
                          <tr
                            className="cursor-pointer hover:bg-gray-100"
                            onClick={() =>
                              history.push(`/talents/${talent.id}`)
                            }
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src={`${process.env.REACT_APP_API_URL}/images/talents/${talent.Talents_Images[0].fileName}`}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-md font-medium text-gray-900">
                                    {talent.fullName}
                                  </div>
                                  <div className="text-sm text-gray-500 italic">
                                    {talent.category}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm whitespace-nowrap">
                              {talent.age}
                            </td>
                            <td className="px-6 py-4 text-sm whitespace-nowrap">
                              {talent.nationality}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {`IDR ${talent.price}`}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="absolute bottom-5 right-5">
                  <PaginationComp
                    count={data.totalPage}
                    page={(val) => setFilter({ ...filter, page: val })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Talent;
