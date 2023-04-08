import { useState } from "react";
import Form from "./Form/Form";
import Tabel from "./Form/Tabel";

function App() {
  const [formData, setFormData] = useState([]);
  const [updateFormData,setUpdateFormData] = useState(null);

  const deleteDataHandler = (deletedData) => {
    setFormData(deletedData);
  };

  const updateDataHandler = (updateData) => {
    console.log("update data : ",updateData)
    // setFormData(updateData)
    setUpdateFormData(updateData);
  };

  function editData(){

  }
  function data(oldData) {
    setFormData([
      ...formData,
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
    ]);
  }

  return (
    <>
      <Form onInputData={data} updateFormData={updateFormData}/>
      <Tabel
        inputData={formData}
        onDeleteData={deleteDataHandler}
        onUpdateData={updateDataHandler}
      />
    </>
  );
}

export default App;
