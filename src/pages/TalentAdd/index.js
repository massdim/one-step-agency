import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { talentAPI } from "../../api";
import { Breadcrumbs } from "../../components";
import { MessageSuccess, MessageError } from "../../utilities";

const TalentAdd = () => {
  const history = useHistory();
  const [form, setForm] = useState({});
  const [images, setImages] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleChoose = async (e) => {
    await setImages(e.target.files);
    // document.getElementById("input-image").value = "";
  };

  const handleSubmit = async () => {
    const data = new FormData();
    data.append("images", images[0]);
    data.append("images", images[1]);
    data.append("images", images[2]);
    data.append("images", images[3]);
    for (const key in form) {
      data.append(key, form[key]);
    }

    const res = await talentAPI.add(data);
    if (res.status === 201) {
      MessageSuccess("Talent has been added!").then(() => {
        history.push(`/talents/${res.data.talent.id}`);
      });
    } else {
      MessageError("Validation Error!");
    }
  };

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { title: "Talent", path: "/talents" },
          { title: "Add", path: "/talents/add" },
        ]}
      />
      <div className="h-102 relative px-6 py-6 rounded-lg bg-white shadow-lg">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-4">
            <div className="w-60 h-60">
              {Object.keys(images).length > 0 && (
                <img
                  className="object-cover"
                  src={`${URL.createObjectURL(images[0])}`}
                />
              )}
            </div>

            <div className="flex">
              {Object.keys(images).length > 1 &&
                Object.keys(images).map((index) => {
                  if (index > 0 && index < 4) {
                    return (
                      <div
                        key={index}
                        className="w-16 h-16 mt-2 mr-6 cursor-pointer"
                      >
                        <img
                          className="object-cover"
                          src={`${URL.createObjectURL(images[index])}`}
                        />
                      </div>
                    );
                  }
                })}
            </div>
          </div>
          <div className="col-span-8 ">
            <div className="flex items-center mb-1">
              <div className="w-40">
                <label>Fullname: </label>
              </div>
              <input
                type="text"
                name="fullName"
                placeholder="Fullname"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none text-sm"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex items-center mb-1">
              <div className="w-40">
                <label>Category: </label>
              </div>
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none text-sm"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex items-center mb-1">
              <div className="w-40">
                <label>Price: </label>
              </div>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none text-sm"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex items-center mb-1">
              <div className="w-40">
                <label>Age: </label>
              </div>
              <input
                type="text"
                name="age"
                placeholder="Age"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none text-sm"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex items-center mb-1">
              <div className="w-40">
                <label>Birth: </label>
              </div>
              <input
                type="text"
                name="birth"
                placeholder="Birth"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none text-sm"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex items-center mb-1">
              <div className="w-40">
                <label>Weight: </label>
              </div>
              <input
                type="text"
                name="weight"
                placeholder="Weight"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none text-sm"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex items-center mb-1">
              <div className="w-40">
                <label>Height: </label>
              </div>
              <input
                type="text"
                name="height"
                placeholder="Height"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none text-sm"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex items-center mb-1">
              <div className="w-40">
                <label>Nationality: </label>
              </div>
              <input
                type="text"
                name="nationality"
                placeholder="Nationality"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none text-sm"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex items-center mb-1">
              <div className="w-40">
                <label>Account Social: </label>
              </div>
              <input
                type="text"
                name="accountSocial"
                placeholder="Account Social"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none text-sm"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex items-center mb-1">
              <div className="w-40">
                <label>Images (max 4): </label>
              </div>
              <input
                type="file"
                id="input-image"
                className="border-0 w-full py-2 text-sm"
                onChange={(e) => handleChoose(e)}
                multiple
              />
            </div>

            <div className="absolute bottom-7">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 border border-green-700 rounded mr-3 px-4"
                onClick={() => handleSubmit()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TalentAdd;
