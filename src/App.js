import { useState } from "react";
import Form from "./Form/Form";
import Tabel from "./Form/Tabel";

function App() {
  const [formData, setFormData] = useState([]);
  const [updateFormData, setUpdateFormData] = useState(null);

  const deleteDataHandler = (deletedData) => {
    setFormData([...deletedData]);
  };

  const updateDataHandler = (updateData) => {
    setUpdateFormData(updateData);
  };

  function data(oldData) {

    let index = false;
    console.log(oldData?.id);
    setFormData((prevArr) => {

      for (let i = 0; i < prevArr.length; i++) {
        console.log(prevArr[i]?.id);
        if (prevArr[i]?.id === oldData?.id) {
          index = i;
          break;
        }
      }
      if (index !== false) {
        prevArr[index] = {
          id:oldData.id,
          firstname: oldData.Firstname,
          lastname: oldData.Lastname,
          birthdate: oldData.Birthdate,
          currentaddress: oldData.Currentaddress,
          permenentaddress: oldData.Permenentaddress,
          birthplace: oldData.Birthplace,
          phonenumber: oldData.Phonenumber,
        };
        return [...prevArr];
      }

      return [
        ...prevArr,
        {
          id: Date.now(),
          firstname: oldData.Firstname,
          lastname: oldData.Lastname,
          birthdate: oldData.Birthdate,
          currentaddress: oldData.Currentaddress,
          permenentaddress: oldData.Permenentaddress,
          birthplace: oldData.Birthplace,
          phonenumber: oldData.Phonenumber,
        },
      ];
    });
  }

  return (
    <>
      <Form
        onInputData={data}
        updateFormData={updateFormData}
        setUpdateFormData={setUpdateFormData}
      />
      <Tabel
        inputData={formData}
        onDeleteData={deleteDataHandler}
        onUpdateData={updateDataHandler}
      />
    </>
  );
}

export default App;
