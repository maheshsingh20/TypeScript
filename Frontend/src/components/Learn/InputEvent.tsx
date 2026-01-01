import { useState, type ChangeEvent } from "react";

interface inputType{
  num: string,
  str:string
}

const InputEvent = () => {

  const [input, setInput] = useState<inputType>({
    num: "",
    str:""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  }

  return (
    <div>
      <input name="num" value={input.num} onChange={handleChange} />
      <input name="str" value={input.str} onChange={handleChange} />
    </div>
  );
}

export default InputEvent;