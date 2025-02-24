import { useState } from "react";

export default function TestPage() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    mail: "",
    kossher: "",
    bezan: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const copyForm = { ...form };
    copyForm.username = value;
    setForm(copyForm);
    console.log(copyForm);
  };
  const object1 = { name: "vala", age: 21, sexmale: true };
  console.log(typeof Object.keys(object1));
  console.log(form);

  return (
    <div>
      <div className="uppercase bg-red-500/60 w-75 h-75 p-2 font-extrabold text-5xl flex justify-center items-center border-6 border-black/50 rounded-2xl m-2 ">
        Salam
      </div>
      <label htmlFor="JJ">Bezan: </label>
      <input
        onChange={handleChange}
        id="JJ"
        className="p-2 border-4"
        type="text"
      />
      <label htmlFor="test">inout:</label>
      <input
        type="text"
        id="test"
        className="border-2 p-2"
        onChange={(e) => setForm({ ...form, bezan: e.target.value })}
      />
    </div>
  );
}
