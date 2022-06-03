/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export default function useForm(initialState = {}) {
  const [inputs, setInputs] = useState(initialState);
  const initialValues = Object.keys(initialState).join('');

  useEffect(() => {
    setInputs(initialState);
  }, [initialValues]);

  const handleChange = (e) => {
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = Number(value);
    }
    if (type === 'file') {
      [value] = e.target.files;
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  function resetForm() {
    setInputs(initialState);
  }
  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }
  return { inputs, handleChange, resetForm, clearForm };
}
