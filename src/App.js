import { useState } from "react";
import Form from "./Form/Form";
import Tabel from "./Form/Tabel";

function App() {
  const [formData, setFormData] = useState([]);

  const deleteDataHandler = (deletedData) => {
    setFormData(deletedData);
  };

  const updateDataHandler = (updateData) => {
    setFormData(updateData)
  };

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
      <Form onInputData={data} />
      <Tabel inputData={formData} onDeleteData={deleteDataHandler} onUpdateData={updateDataHandler}/>
    </>
  );
}

export default App;
