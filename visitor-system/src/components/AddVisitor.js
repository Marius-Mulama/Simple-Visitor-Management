import React, { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddVisitor = () => {
  const [name, setName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [purposeOfVisit, setPurposeOfVisit] = useState('');
  const [nationality, setNationality] = useState('');

  const resetForm =()=>{
    setName('');
    setIdNumber('');
    setPurposeOfVisit('');
    setNationality('');
  }

  const handleSubmit = (e) => {
    const vistorDetails = JSON.stringify({
      name: name,
      nationality: nationality,
      idNumber: idNumber,
      purpose: purposeOfVisit
    });

      axios
        .post(
          "http://localhost:8000/api/visitors/add",
          vistorDetails,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response)
          if (response.status === 200) {
              toast.success("Visitor Added", {
                position: "top-center",
                autoClose: 3000
              });

              resetForm();

          } else {
            toast.error("An error occured while processing your request", {
                position: "top-center",
                autoClose: 3000
              });
            
          }
        })
        .catch((Error) => {
            toast.error("An error occured while processing your request", {
                position: "top-center",
                autoClose: 3000
              });
            console.error(Error)
          
        });

         e.preventDefault();

  };

  return (
    <section class="py-1 px-0">
      <div class="w-full  mx-auto mt-1">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-1">
          <div class="rounded-t  mb-0 px-6 py-6">
            <div class="text-center flex ">
              <h6 class="text-blueGray-700 text-xl font-bold">New Visitor</h6>
            </div>
          </div>
          <div class="flex-auto px-4 lg:px-10 py-5 pt-0">
            <form
              className="space-y-8 ng-untouched ng-pristine ng-valid"
              name="experience-form"
              onSubmit={handleSubmit}
            >
              {/* Visitor Name */}
              <div className="space-y-1">
                <label htmlFor="name" className="block font-semibold text-lg">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Full Name"
                  className="w-full px-3 py-2 border rounded-md focus:dark:border-violet-400"
                />
              </div>

              {/* Nationality */}
              <div className="space-y-1">
                <label htmlFor="id-number" className="block font-semibold text-lg">
                  Nationality
                </label>
                <input
                  type="text"
                  name="nationality"
                  id="nationality"
                  value={nationality}
                  required
                  onChange={(e) => {
                    setNationality(e.target.value);
                  }}
                  placeholder="Natioanlity"
                  className="w-full px-3 py-2 border rounded-md focus:dark:border-violet-400"
                />
              </div>              

              {/* Id or Passport Number */}
              <div className="space-y-1">
                <label htmlFor="id-number" className="block font-semibold text-lg">
                  ID or Passport Number
                </label>
                <input
                  type="text"
                  name="id-number"
                  id="id-number"
                  value={idNumber}
                  required
                  onChange={(e) => {
                    setIdNumber(e.target.value);
                  }}
                  placeholder="ID or Passport Number"
                  className="w-full px-3 py-2 border rounded-md focus:dark:border-violet-400"
                />
              </div>

              {/* Purpose of visit */}
              <div className="space-y-1">
                <label htmlFor="purpose" className="block font-semibold text-lg">
                  Purpose
                </label>
                <input
                  type="text"
                  name="purpose"
                  id="purpose"
                  value={purposeOfVisit}
                  required
                  onChange={(e) => {
                    setPurposeOfVisit(e.target.value);
                  }}
                  placeholder="Why the visit?"
                  className="w-full px-3 py-2 border rounded-md focus:dark:border-violet-400"
                />
              </div>              


              <button
                type="submit"
                className="w-full px-8 py-3 font-bold rounded-md dark:bg-green-400 dark:text-white hover:bg-green-600"
              >
                ADD VISITOR
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddVisitor;
