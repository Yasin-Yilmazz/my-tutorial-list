import axios from "axios";
import React from "react";
import AddTutotrial from "../components/AddTutotrial";
import Tutorials from "../components/Tutorials";
import { useState, useEffect } from "react";

const Home = () => {
  const [tutorial, setTutorial] = useState();

  const URL = "https://axios-example-cw.herokuapp.com/api/tutorials";

  //! Setted  a function to Get Data
  const getData = async () => {
    try {
      const { data } = await axios.get(URL);
      setTutorial(data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  // console.log(tutorial);

  //! POST DATA

  const postData = async (newTutorial) => {
    try {
      await axios.post(URL, newTutorial);
    } catch (error) {
      alert(error);
    }
    getData();
  };

  //! Delete Data

  const deleteData = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
    } catch (error) {
      alert(error);
    }
    getData();
  };

  //! Edit Data
  const editData = async (id, title, desc) => {
    try {
      await axios.put(`${URL}/${id}`, { title, description: desc });
    } catch (error) {
      alert(error);
    }
    getData();
  };

  return (
    <div>
      <AddTutotrial postData={postData} />
      <Tutorials
        tutorial={tutorial}
        deleteData={deleteData}
        editData={editData}
      />
    </div>
  );
};

export default Home;
