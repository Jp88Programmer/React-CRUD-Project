import { useEffect, useState } from "react";
import InputData from "../UserInput/InputData";

const FirstName = (props) => {
  
  const [id,setId] = useState(0);
  let [
    enName,
    setenName,
    setenTouch,
    validName,
    inputError,
    nameChanger,
    nameBlurChanger,
    resetNameInput,
  ] = InputData((value) => value.trim().length >= 2);

  let [
    lastName,
    setlastName,
    setlastTouch,
    validLastName,
    inputLastNameError,
    LastNameChanger,
    LastNameBlurChanger,
    resetLastNameInput,
  ] = InputData((value) => value.trim().length >= 2);

  let [
    birthdate,
    setBirthdate,
    setBirthTouch,
    validBirthDate,
    inputBirthDateError,
    BirthDateChanger,
    BirthDateBlurChanger,
    resetBirthDateInput,
  ] = InputData((value) => {
    const trimmedValue = value.trim();
    if (trimmedValue) {
      const inputDate = new Date(trimmedValue);
      const currentDate = new Date();
      if (inputDate <= currentDate) {
        return true;
      }
    }
    return false;
  });

  let [
    currentaddress,
    setCurrentaddress,
    setCurrentTouch,
    validCurrentAddress,
    inputCurrentAddressError,
    CurrentAddressChanger,
    CurrentAddressBlurChanger,
    resetCurrentAddressInput,
  ] = InputData((value) => value.trim().length >= 5);

  let [
    permenentaddress,
    setPermentaddress,
    setPermentTouch,
    validPermenentAddress,
    inputPermenentAddressError,
    PermenentAddressChanger,
    PermenentAddressBlurChanger,
    resetPermenentAddressInput,
  ] = InputData((value) => value.trim().length >= 5);

  let [
    birthPlace,
    setBirthPlace,
    setBirthPlaceTouch,
    validBirthPlace,
    inputBirthPlaceError,
    BirthPlaceChanger,
    BirthPlaceBlurChanger,
    resetBirthPlaceInput,
  ] = InputData((value) => value.trim().length >= 2);

  let [
    phoneNumber,
    setPhoneNumber,
    setPhoneTouch,
    validPhoneNumber,
    inputPhoneNumberError,
    PhoneNumberChanger,
    PhoneNumberBlurChanger,
    resetPhoneNumberInput,
  ] = InputData((value) => value.trim().length === 10);

  let validForm = false;

  if (
    validName &&
    validLastName &&
    validBirthDate &&
    validCurrentAddress &&
    validPermenentAddress &&
    validBirthPlace &&
    validPhoneNumber
  ) {
    validForm = true;
  }

  useEffect(() => {
    if (props.updateFormData) {
      setId(props.updateFormData?.id);
      setenName(props.updateFormData?.firstname);
      setenTouch(true);
      setlastName(props.updateFormData?.lastname);
      setlastTouch(true);
      setBirthdate(props.updateFormData?.birthdate);
      setBirthTouch(true);
      setCurrentaddress(props.updateFormData?.currentaddress);
      setCurrentTouch(true);
      setPermentaddress(props.updateFormData?.permenentaddress);
      setPermentTouch(true);
      setBirthPlace(props.updateFormData?.birthplace);
      setBirthPlaceTouch(true);
      setPhoneNumber(props.updateFormData?.phonenumber);
      setPhoneTouch(true);
      props.setUpdateFormData(null);
    }
  }, [props.updateFormData]);

  const formSubmit = (event) => {
    event.preventDefault();

    const allData = {
      id:id,
      Firstname: enName,
      Lastname: lastName,
      Birthdate: birthdate,
      Currentaddress: currentaddress,
      Permenentaddress: permenentaddress,
      Birthplace: birthPlace,
      Phonenumber: phoneNumber,
    };
    props?.onInputData(allData);

    if (
      !validName &&
      !validLastName &&
      !validBirthDate &&
      !validCurrentAddress &&
      !validPermenentAddress &&
      !validBirthPlace &&
      !validPhoneNumber
    ) {
      return;
    }
    resetNameInput();
    resetLastNameInput();
    resetBirthDateInput();
    resetCurrentAddressInput();
    resetPermenentAddressInput();
    resetBirthPlaceInput();
    resetPhoneNumberInput();
  };

  return (
    <div className=" flex flex-col justify-center mt-20 items-center border-solid ">
      <form
        className=" mb-4 p-7 bg-slate-400 border-2 border-black rounded-md shadow-md"
        onSubmit={formSubmit}
      >
        <div className="font-bold m-4">
          <label className=" mr-2" htmlFor="name">
            First Name <span class="text-red-500">*</span>
          </label>
          <input
            className="block border border-black rounded-md p-1.5 mt-1 w-full"
            type="text"
            id="name"
            placeholder="Enter your First Name..."
            onBlur={nameBlurChanger}
            onChange={nameChanger}
            value={enName}
          />
          {inputError && (
            <p className="text-red-600">
              {enName.trim().length === 0
                ? "First Name is required"
                : "First Name is too short! Please enter at least 2 characters"}
            </p>
          )}
        </div>
        <div className="font-bold m-4">
          <label className=" mr-2" htmlFor="name">
            Last Name <span class="text-red-500">*</span>
          </label>
          <input
            className="block border border-black rounded-md p-1.5 mt-1 w-full"
            type="text"
            id="name"
            placeholder="Enter Your Last Name..."
            onBlur={LastNameBlurChanger}
            onChange={LastNameChanger}
            value={lastName}
          />
          {inputLastNameError && (
            <p className="text-red-600">
              {lastName.trim().length === 0
                ? "Last Name is required"
                : "Last Name is too short! Please enter at least 2 characters"}
            </p>
          )}
        </div>
        <div className="font-bold m-4">
          <label className=" mr-2" htmlFor="birthdate">
            Birth Date <span class="text-red-500">*</span>
          </label>
          <input
            className="block border border-black rounded-md p-1.5 mt-1 w-full "
            type="date"
            id="birthdate"
            onBlur={BirthDateBlurChanger}
            onChange={BirthDateChanger}
            value={birthdate}
          />
          {inputBirthDateError && (
            <p className="text-red-600">'Please enter a valid birth date.'</p>
          )}
        </div>
        <div className="font-bold m-4">
          <label className=" mr-2" htmlFor="currentAddress">
            Current Address <span class="text-red-500">*</span>
          </label>
          <textarea
            className="block border border-black rounded-md p-1.5 mt-1 w-full"
            type="text"
            id="currentAddress"
            placeholder="Enter your Current Address..."
            onBlur={CurrentAddressBlurChanger}
            onChange={CurrentAddressChanger}
            value={currentaddress}
          />
          {inputCurrentAddressError && (
            <p className="text-red-600">
              {currentaddress.trim().length === 0
                ? "Current Address is required"
                : "Current Address is too short! Please enter at least 5 characters."}
            </p>
          )}
        </div>
        <div className="font-bold m-4">
          <label className=" mr-2" htmlFor="permenentAddress">
            Permenent Address <span class="text-red-500">*</span>
          </label>
          <textarea
            className="block border border-black rounded-md p-1.5 mt-1 w-full"
            type="text"
            id="permenentAddress"
            placeholder="Enter your Permenent Address.."
            onBlur={PermenentAddressBlurChanger}
            onChange={PermenentAddressChanger}
            value={permenentaddress}
          />
          {inputPermenentAddressError && (
            <p className="text-red-600">
              {permenentaddress.trim().length === 0
                ? "Permenent Address is required"
                : "Permenent Address is too short! Please enter at least 5 characters."}
            </p>
          )}
        </div>
        <div className="font-bold m-4">
          <label className=" mr-2" htmlFor="placeofbirth">
            Place of Birth <span class="text-red-500">*</span>
          </label>
          <input
            className="block border border-black rounded-md p-1.5 mt-1 w-full"
            type="text"
            id="placeofbirth"
            placeholder="Enter your Birthplace..."
            onBlur={BirthPlaceBlurChanger}
            onChange={BirthPlaceChanger}
            value={birthPlace}
          />
          {inputBirthPlaceError && (
            <p className="text-red-600">
              {birthPlace.trim().length === 0
                ? "Birthplace is required"
                : "Birthplace is too short! Please enter at least 2 characters."}
            </p>
          )}
        </div>
        <div className="font-bold m-4">
          <label className=" mr-2" htmlFor="phonenumber">
            Phone Number <span class="text-red-500">*</span>
          </label>
          <input
            className="block border border-black rounded-md p-1.5 mt-1 w-full"
            type="tel"
            id="phonenumber"
            placeholder="Enter Like 123123123..."
            onBlur={PhoneNumberBlurChanger}
            onChange={PhoneNumberChanger}
            value={phoneNumber}
          />
          {inputPhoneNumberError && (
            <p className="text-red-600">
              {phoneNumber.trim().length === 0
                ? "Phonenumber is required"
                : "Phone Number at least 10 digit."}
              </p>
          )}
        </div>
        <div className="font-bold m-4">
          <label className=" mr-2">Profile picture :</label>
          <input type="file" accept=".jpg,.jpeg,.png" />
        </div>
        <p className=" font-bold m-4 text-red-600">* All the above fields are mandatory</p>
        <div className="flex justify-center">
          <button
            className="mb-6 bg-sky-950 border border-gray-300 text-white font-bold text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 disabled:cursor-not-allowed"
            disabled={!validForm}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FirstName;
