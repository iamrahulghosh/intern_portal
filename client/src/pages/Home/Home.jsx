import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Home() {
  const [interndata, setInterndata] = useState({
    offerLetters: [],
    certificates: [],
    lors: [],
  });
  const navigate = useNavigate()

  const fetchParks = async () => {
    try {
      const response = await axios.get(
        "https://cxi-server.vercel.app/api/v1/intern/parks",
        {
          withCredentials: true,
          "Content-Type": "application/json",
        }
      );

      if (response.status === 200) {
        toast.success("Intern Data Fetched Successfully!");
      }

      setInterndata({
        offerLetters: response?.data?.data?.offerLetters,
        certificates: response?.data?.data?.certificates,
        lors: response?.data?.data?.lors,
      });
    } catch (error) {
      navigate("/")
    }
  };

  console.log(interndata);

  const logout = async () => {
    try {
      const response = await axios.get(
        "https://cxi-server.vercel.app/api/v1/intern/logout",
        {
          withCredentials: true,
          "Content-Type": "application/json"
        }
      )

      navigate("/")
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchParks()
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Toaster />
      <div className="bg-gray-900 bg-opacity-90 p-6 rounded-2xl max-w-md w-full text-center shadow-xl border border-gray-700">
        <h1 className="text-white text-2xl font-bold mb-2">
          Welcome, <span className="text-white"></span>
        </h1>
        <p className="text-gray-300 mb-6">
          Your Certificate is ready! Click below to download:
        </p>

        <div className="flex flex-col items-center gap-4">
          {interndata?.offerLetters.length !== 0
            ? interndata?.offerLetters.map((value, index) => {
                return (
                  <a
                    href={value?.offerLetter}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 font-semibold py-2 px-4 rounded-xl hover:bg-gray-100 transition duration-300 w-full max-w-xs"
                    key={index}
                  >
                    <svg
                      className="w-5 h-5 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Download Offer Letter
                  </a>
                );
              })
            : (<div className="text-white">No Offer Letter Found!</div>)}

            {interndata?.certificates.length !== 0
            ? interndata?.certificates.map((value, index) => {
                return (
                  <a
                    href={value?.certificate}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 font-semibold py-2 px-4 rounded-xl hover:bg-gray-100 transition duration-300 w-full max-w-xs"
                    key={index}
                  >
                    <svg
                      className="w-5 h-5 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Download Certificate
                  </a>
                );
              })
            : (<div className="text-white">No Certificate Found!</div>)}

            {interndata?.lors.length !== 0
            ? interndata?.lors.map((value, index) => {
                return (
                  <a
                    href={value?.lor}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 font-semibold py-2 px-4 rounded-xl hover:bg-gray-100 transition duration-300 w-full max-w-xs"
                    key={index}
                  >
                    <svg
                      className="w-5 h-5 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Download LOR
                  </a>
                );
              })
            : (<div className="text-white">No LOR Found!</div>)}

          <button className="text-white border border-white px-4 py-2 rounded-xl hover:bg-white hover:text-black transition duration-300 w-full max-w-xs" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
