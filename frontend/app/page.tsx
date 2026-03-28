"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [first, setFirst] = useState(true);
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const inputHandle = ({target}: any) => {
    const { name, value } = target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const login = () => {
    console.log(data);
    setData({
      email: "",
      password: "",
    });
  };

  // test state w effect : boundsing w unboundsing 
  /*useEffect(() => {
    const Timer = setTimeout(() => {
      console.log(first);
      setFirst(!first);
    }, 2000);
    console.log("useEffect");
    return () => {
      console.log("clearTimeout");
      clearTimeout(Timer);
    };
  }, [first]);*/

  /////////////////////////// useState is asynchronous, so the value of first will not be updated immediately after calling setFirst. Therefore, when you log first right after calling setFirst, it will still show the old value. To see the updated value of first, you can use a useEffect hook that depends on first, or you can log the value of first in the handleFirst function after the state has been updated.
  // state tetsn3 f RAM w management mt3ha y3mlha noyau react
  // react dom compile les composants w y3mlha render f DOM w y3mlha diffing w reconciliation 3la DOM w y3mlha update f DOM

  /*const handleFirst = (event:any) => {
    //console.log(event);
    //console.log(first);
    //setFirst(!first);
    setFirst((prevFirst) => {
      console.log(prevFirst);
      return !prevFirst;
    });
    // console.log(first);
  }*/
  // set mt3 state bch t5dm f background

  const handleFirst = (event: any) => {
    // Utilisez les valeurs ici
    console.log("Text:", text);
    console.log("Number:", number);
    // Vider les champs
    setText("");
    setNumber("");
    // setFirst((prevFirst) => !prevFirst);
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <input
        type="text"
        className="px-4 py-2 border rounded mb-4"
        placeholder="Enter email"
        value={data.email} // to way binding : rabt les donness mta3 l input b state
        name="email"
        onChange={inputHandle}
      />
      <input
        type="password"
        className="px-4 py-2 border rounded mb-4"
        placeholder="Enter password"
        value={data.password}
        name="password"
        onChange={inputHandle}
      />
      <button
        onClick={login}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Login
      </button>
    </div>
  );
}
