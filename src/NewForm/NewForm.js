import React, { useState } from "react";

const formInputData = {
  firstName: "",
  lastName: "",
  birthDate: "",
  placeOfBirth: "",
  currentAddress: "",
  permenentAddress: "",
  phoneNumber: "",
  profilePicture:null,
};

const NewForm = () => {

  const [formData, setFormData] = useState(formInputData);
  const [inputError, setFormErrors] = useState({});
  const [inputData, setInputData] = useState([]);
  const [allData, setAllData] = useState();
  const [edit, setEdit] = useState(false);

  let {
    firstName,
    lastName,
    placeOfBirth,
    birthDate,
    currentAddress,
    permenentAddress,
    phoneNumber,
    profilePicture,
  } = formData;

  const changeData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function onDelete(i) {
    let Delete = [...inputData];
    Delete.splice(i, 1);
    setInputData(Delete);
  }

  function onUpdate(i) {
    let {
      firstName,
      lastName,
      placeOfBirth,
      birthDate,
      currentAddress,
      permenentAddress,
      phoneNumber,
      profilePicture,
    } = inputData[i];
    setFormData({
      firstName,
      lastName,
      placeOfBirth,
      birthDate,
      currentAddress,
      permenentAddress,
      phoneNumber,
      profilePicture,
    });
    setEdit(true);
    setAllData(i);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    const error = validation();

    if (Object.keys(error).length === 0) {
      if (edit) {
        const updateData = [...inputData];
        updateData[allData] = formData;
        setInputData(updateData);
        setEdit(false);
        setAllData(null);
      } else {
        setInputData([...inputData, formData]);
      }
      setFormData(formInputData);
      setFormErrors({});
    } else {
      setFormErrors(error);
    }
  };

  function onUpdateData() {
    let updateData = [...inputData];

    updateData.splice(allData, 1, {
      firstName,
      lastName,
      placeOfBirth,
      birthDate,
      currentAddress,
      permenentAddress,
      phoneNumber,
      profilePicture,
    });
  }

  const validation = () => {
    const error = {};
    const currentDate = new Date();
    const birthDate = new Date(formData.birthDate);

    if (formData.firstName.length < 2) {
      error.firstName =
        "First name is required and Please enter at least 2 characters.";
    }

    if (formData.lastName.length < 2) {
      error.lastName =
        "Last name is required and Please enter at least 2 characters";
    }

    if (birthDate > currentDate) {
      error.birthDate = "Please enter a valid birth date.";
    }

    if (formData.currentAddress.length < 5) {
      error.currentAddress =
        "Current Address is required and Please enter at least 5 characters.";
    }

    if (formData.permenentAddress.length < 5) {
      error.permenentAddress =
        "Permenent Address is required and Please enter at least 5 characters.";
    }

    if (formData.placeOfBirth.length < 2) {
      error.placeOfBirth =
        "Birthplace is required and  Please enter at least 2 characters.";
    }

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      error.phoneNumber =
        "Phonenumber is required and Please enter at least 10 digit.";
    }

    return error;
  };

  // const changeProfilePicture = (e) => {
  //   const picture = e.target.files[0];
  //   setFormData({
  //     ...formData,
  //     profilePicture: picture || null,
  //   });
  // };

  return (
    <>
      <div className="flex flex-col justify-center mt-20 items-center border-solid">
        <form
          className="mb-4 p-7 bg-slate-400 border-2 border-black rounded-md shadow-md"
          onSubmit={onFormSubmit}
        >
          <div className="font-bold m-4">
            <label className=" mr-2" htmlFor="firstName">
              First Name <span class="text-red-500">*</span>
            </label>
            <input
              className="block border border-black rounded-md p-1.5 mt-1 w-full"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your First Name..."
              value={formData.firstName}
              onChange={changeData}
            />
            {inputError.firstName && (
              <span class="text-red-500">{inputError.firstName}</span>
            )}
          </div>
          <div className="font-bold m-4">
            <label className=" mr-2" htmlFor="lastName">
              Last Name <span class="text-red-500">*</span>
            </label>
            <input
              className="block border border-black rounded-md p-1.5 mt-1 w-full"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter Your Last Name..."
              value={formData.lastName}
              onChange={changeData}
            />
            {inputError.lastName && (
              <span class="text-red-500">{inputError.lastName}</span>
            )}
          </div>
          <div className="font-bold m-4">
            <label className=" mr-2" htmlFor="phoneNumber">
              Birth Date <span class="text-red-500">*</span>
            </label>
            <input
              className="block border border-black rounded-md p-1.5 mt-1 w-full"
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={changeData}
            />
            {inputError.birthDate && (
              <span class="text-red-500">{inputError.birthDate}</span>
            )}
          </div>
          <div className="font-bold m-4">
            <label className=" mr-2" htmlFor="currentAddress">
              Current Address <span class="text-red-500">*</span>
            </label>
            <textarea
              className="block border border-black rounded-md p-1.5 mt-1 w-full"
              type="textarea"
              id="currentAddress"
              name="currentAddress"
              value={formData.currentAddress}
              placeholder="Enter your Current Address..."
              onChange={changeData}
            />
            {inputError.currentAddress && (
              <span class="text-red-500">{inputError.currentAddress}</span>
            )}
          </div>
          <div className="font-bold m-4">
            <label className=" mr-2" htmlFor="permenentAddress">
              Permenent Address <span class="text-red-500">*</span>
            </label>
            <textarea
              className="block border border-black rounded-md p-1.5 mt-1 w-full"
              type="textarea"
              id="permenentAddress"
              name="permenentAddress"
              value={formData.permenentAddress}
              placeholder="Enter your Permenent Address.."
              onChange={changeData}
            />
            {inputError.permenentAddress && (
              <span class="text-red-500">{inputError.permenentAddress}</span>
            )}
          </div>
          <div className="font-bold m-4">
            <label className=" mr-2" htmlFor="placeOfBirth">
              Place of Birth <span class="text-red-500">*</span>
            </label>
            <input
              className="block border border-black rounded-md p-1.5 mt-1 w-full"
              type="text"
              id="placeOfBirth"
              name="placeOfBirth"
              value={formData.placeOfBirth}
              placeholder="Enter your Birthplace..."
              onChange={changeData}
            />
            {inputError.placeOfBirth && (
              <span class="text-red-500">{inputError.placeOfBirth}</span>
            )}
          </div>
          <div className="font-bold m-4">
            <label className=" mr-2" htmlFor="phoneNumber">
              Phone Number <span class="text-red-500">*</span>
            </label>
            <input
              className="block border border-black rounded-md p-1.5 mt-1 w-full"
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              placeholder="Enter like 123123123..."
              onChange={changeData}
            />
            {inputError.phoneNumber && (
              <span class="text-red-500">{inputError.phoneNumber}</span>
            )}
          </div>
          <div className="font-bold m-4">
            <label htmlFor="profilePic" className="mr-2">
              ProfilePic:
            </label>
            <input
              type="file"
              id="profilePic"
              name="profilePicture"
              accept="image/png, image/jpg, image/jpeg"
              value={formData.profilePicture}
              // onChange={changeProfilePicture}
            />
          </div>
          <p className=" font-bold m-4 text-red-600">
            * All the above fields are mandatory
          </p>
          <div className="flex justify-center">
            <button
              className="mb-6 bg-sky-950 border border-gray-300 text-white font-bold text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5"
              onClick={!edit ? onFormSubmit : onUpdateData}
            >
              {!edit ? `Submit` : `Update`}
            </button>
          </div>
        </form>
      </div>
      <div className=" overflow-auto rounded-sm m-7">
        <table className="bg-slate-400 text-black w-full border-2 border-black mb-10 text-center">
          <tbody>
            <tr className="font-bold">
              <td className=" p-3 border-2 border-black">Name</td>
              <td className="border-2 border-black">Birthdate</td>
              <td className="border-2 border-black">Address</td>
              <td className="border-2 border-black">Place Of Birth</td>
              <td className="border-2 border-black">Phone Number</td>
              <td className="border-2 border-black">Update</td>
              <td className="border-2 border-black">Delete</td>
            </tr>
            {inputData &&
              inputData.map((item, i) => {
                return (
                  <tr className=" font-bold text-black" key={i}>
                    <td className="border-2 border-black">
                      {item.firstName} {item.lastName}
                    </td>
                    <td className="border-2 border-black">{item.birthDate}</td>
                    <td className="border-2 border-black">
                    <span className=" text-black">Current : </span>
                    {item.currentAddress}
                    <br />
                    <span className=" text-black">Permenent : </span>
                    {item.permenentAddress}
                    </td>
                    <td className="border-2 border-black">
                      {item.placeOfBirth}
                    </td>
                    <td className="border-2 border-black">
                      {item.phoneNumber}
                    </td>
                    <td className="border-2 border-black">
                      <button
                        className=" bg-blue-500 text-white px-2 py-1 rounded-md m-2"
                        onClick={() => onUpdate(i)}
                      >
                        Update
                      </button>
                    </td>
                    <td className="border-2 border-black">
                      <button
                        className=" bg-red-800 text-white px-2 py-1 rounded-md m-2"
                        onClick={() => onDelete(i)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default NewForm;
