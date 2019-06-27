import React, {useState} from "react";

const useFightForm = (callback) => {
    const [inputs, setInputs] = useState({
        judge: "",
        fighter1: "",
        fighter2: "",
        numberOfRounds: ""
    });
    const handleSubmit = (event) => {
      if (event) {
        event.preventDefault();
      }
      callback();
    }
    const handleInputChange = (event) => {
      event.persist();
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
      handleSubmit,
      handleInputChange,
      inputs
    };
}

export default useFightForm;