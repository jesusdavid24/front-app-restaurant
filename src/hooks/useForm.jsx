import { useState } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  const handleChange = (event) => {
    setForm({
        ...form,
        [event.target.name]: event.target.value
    });
  };
  return { form, handleChange };
};
