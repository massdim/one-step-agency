import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { talentAPI } from "../../api";
import { Breadcrumbs } from "../../components";
import { MessageSuccess, MessageError } from "../../utilities";

const TalentEdit = () => {
  const history = useHistory();
  const params = useParams();
  const { id } = params;
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const getOne = async () => {
    const res = await talentAPI.getOne(id);
    if (res.status === 200) {
      setForm(res.data.talent);
    }
  };

  const handleUpdate = async () => {
    const res = await talentAPI.update(id, form);
    console.log(res);
    if (res.status === 200) {
      MessageSuccess("Talent has been updated!").then(() => {
        history.push(`/talents/${id}`);
      });
    } else {
      MessageError("Validation Error!");
    }
  };

  useEffect(() => {
    getOne();
  }, []);
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { title: "Talent", path: "/talents" },
          { title: "Profile", path: `/talents/${id}` },
          { title: "Edit", path: `/talents/${id}/edit` },
        ]}
      />
      {Object.keys(form).length > 0 && (
        <div className="h-102 relative px-6 py-6 rounded-lg bg-white shadow-lg">
          <div class="grid grid-cols-12 gap-10">
            <div class="col-span-4">
              <div className="w-60 h-60 cursor-pointer">
                <img
                  className="object-cover"
                  src={`${process.env.REACT_APP_API_URL}/images/talents/${form.Talents_Images[0].fileName}`}
                />
              </div>

              <div className="flex">
                {form.Talents_Images.map((image, index) => {
                  if (index > 0) {
                    return (
                      <div className="w-16 h-16 mt-2 mr-6 cursor-pointer">
                        <img
                          className="object-cover"
                          src={`${process.env.REACT_APP_API_URL}/images/talents/${image.fileName}`}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div class="col-span-8 ">
              <div class="flex items-center mb-1">
                <div className="w-40">
                  <label>Fullname: </label>
                </div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Fullname"
                  value={form.fullName}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none text-sm"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div class="flex items-center mb-1">
                <div className="w-40">
                  <label>Category: </label>
                </div>
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={form.category}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none text-sm"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div class="flex items-center mb-1">
                <div className="w-40">
                  <label>Price: </label>
                </div>
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  value={form.price}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none text-sm"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div class="flex items-center mb-1">
                <div className="w-40">
                  <label>Age: </label>
                </div>
                <input
                  type="text"
                  name="age"
                  placeholder="Age"
                  value={form.age}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none text-sm"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div class="flex items-center mb-1">
                <div className="w-40">
                  <label>Birth: </label>
                </div>
                <input
                  type="text"
                  name="birth"
                  placeholder="Birth"
                  value={form.birth}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none text-sm"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div class="flex items-center mb-1">
                <div className="w-40">
                  <label>Weight: </label>
                </div>
                <input
                  type="text"
                  name="weight"
                  placeholder="Weight"
                  value={form.weight}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none text-sm"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div class="flex items-center mb-1">
                <div className="w-40">
                  <label>Height: </label>
                </div>
                <input
                  type="text"
                  name="height"
                  placeholder="Height"
                  value={form.height}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none text-sm"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div class="flex items-center mb-1">
                <div className="w-40">
                  <label>Nationality: </label>
                </div>
                <input
                  type="text"
                  name="nationality"
                  placeholder="Nationality"
                  value={form.nationality}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none text-sm"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div class="flex items-center mb-1">
                <div className="w-40">
                  <label>Account Social: </label>
                </div>
                <input
                  type="text"
                  name="accountSocial"
                  placeholder="Account Social"
                  value={form.accountSocial}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none text-sm"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="absolute bottom-7">
                <button
                  class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 border border-green-700 rounded mr-3 px-4"
                  onClick={() => handleUpdate()}
                >
                  Update
                </button>
                <button
                  class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 border border-red-700 rounded mr-3 px-4"
                  onClick={() => getOne()}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TalentEdit;
