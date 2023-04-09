import React from "react";

const Tabel = (props) => {
  function deleteData(id) {
    let total = props.inputData.filter((items) => items.id !== id);
    props.onDeleteData(total);
  }

  function updateData(i) {
    let tempData = props?.inputData[i];
    console.log("temp", tempData);
    props.onUpdateData(tempData);
  }

  return (
    <div className=" overflow-auto rounded-sm m-7">
      <table className="bg-slate-400 text-black w-full border-2 border-black mb-10 text-center">
        <tbody>
          <tr className="font-bold">
            <td className="p-3 border-2 border-black">Name</td>
            <td className="border-2 border-black">Birthdate</td>
            <td className="border-2 border-black">Address</td>
            <td className="border-2 border-black">Place of Birth</td>
            <td className="border-2 border-black">Phone Number</td>
            <td className="border-2 border-black">Update</td>
            <td className="border-2 border-black">Delete</td>
          </tr>
          {console.log("this is the props", props)}
          {props?.inputData.map((items,index) => {
            return (
              <tr className=" font-bold text-black" key={items.id}>
                <td className="border-2 border-black">
                  {items.firstname} {items.lastname}
                </td>
                <td className="border-2 border-black">{items.birthdate}</td>
                <td className="border-2 border-black">
                  <span className=" text-black">Current :</span>
                  {items.currentaddress}
                  <br />
                  <span className=" text-black">Permenent :</span>
                  {items.permenentaddress}
                </td>
                <td className="border-2 border-black">{items.birthplace}</td>
                <td className="border-2 border-black">{items.phonenumber}</td>
                <td className="border-2 border-black">
                  <button
                    className=" bg-blue-500 text-white px-2 py-1 rounded-md m-2"
                    onClick={() => updateData(index)}
                  >
                    Update
                  </button>
                </td>
                <td className="border-2 border-black">
                  <button
                    className=" bg-red-800 text-white px-2 py-1 rounded-md m-2"
                    onClick={() => deleteData(items.id)}
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
  );
};

export default Tabel;
