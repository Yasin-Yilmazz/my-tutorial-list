import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import EditTutorial from "./EditTutorial";
import { useState } from "react";

const Tutorials = ({ tutorial, deleteData, editData }) => {
  // console.log(tutorial);
  const [editItem, setEditItem] = useState("");

  return (
    <div className="container text-center">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        {/* mapped all items with properties */}
        <tbody className="">
          {tutorial?.map((item, key) => {
            const { id, title, description } = item;
            return (
              <tr key={key}>
                <th scope="row">{id} </th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-nowrap">
                  <FiEdit
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    className="text-warning"
                    role="button"
                    onClick={() => setEditItem(item)}
                  />
                  {"  "}
                  <BsFillTrashFill
                    className="text-danger"
                    role="button"
                    onClick={() => deleteData(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditTutorial editData={editData} editItem={editItem} />
    </div>
  );
};

export default Tutorials;
