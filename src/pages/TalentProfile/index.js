import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { talentAPI } from "../../api";
import { Breadcrumbs } from "../../components";

const TalentProfile = () => {
  const params = useParams();
  const { id } = params;
  const [talent, setTalent] = useState({});

  const getOne = async () => {
    const res = await talentAPI.getOne(id);
    if (res.status === 200) {
      setTalent(res.data.talent);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getOne();
  }, []);

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { title: "Talent", path: "/talents" },
          { title: "Profile", path: `/talents/${id}` },
        ]}
      />

      {Object.keys(talent).length > 0 && (
        <div className="h-90 relative px-6 py-6 rounded-lg bg-white shadow-lg">
          <div class="grid grid-cols-12 gap-10">
            <div class="col-span-4">
              <div className="w-60 h-60">
                <img
                  className="object-cover"
                  src={`${process.env.REACT_APP_API_URL}/images/talents/${talent.Talents_Images[0].fileName}`}
                />
              </div>

              <div className="flex">
                {talent.Talents_Images.map((image, index) => {
                  if (index > 0) {
                    return (
                      <div className="w-16 h-16 mt-2 mr-6">
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
              <div class="text-2xl font-medium text-gray-900">
                {`${talent.fullName} (${talent.age})`}
              </div>
              <div class="text-lg text-gray-500 italic">{talent.category}</div>

              <div class="text-md text-gray-500 mt-5">
                <div>{`Weight: ${talent.weight} kg`}</div>
                <div>{`Height: ${talent.height} cm`}</div>
              </div>

              <div class="text-xl text-gray-700 mt-3">
                <div>{`IDR ${talent.price}`}</div>
              </div>

              <div className="absolute bottom-7">
                <Link to={`/talents/${id}/edit`}>
                  <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 border border-yellow-700 rounded mr-3 px-4">
                    Edit
                  </button>
                </Link>

                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 border border-red-700 rounded">
                  Remove Talent
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TalentProfile;
