import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const Tutorials = ({ tutorial, deleteData }) => {
  // console.log(tutorial);

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
          {tutorial?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr>
                <th scope="row">{id} </th>
                <td>{title}</td>
                <td>{description}</td>
                <td>
                  {/* set buttons */}
                  <FiEdit className="text-warning" role="button" />
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
    </div>
  );
};

export default Tutorials;
