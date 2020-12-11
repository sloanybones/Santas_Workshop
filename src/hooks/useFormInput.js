import {useState} from 'react'

const useFormInput = (initialValue, label) => {
  const [value, setValue] = useState(initialValue);

  return {
    value: value,
    onChange: (e) => setValue(e.target.value),
    name: label,
    placeholder: label,
    label: label,
  };
};

export default useFormInput;