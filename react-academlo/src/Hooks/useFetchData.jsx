import React, { useEffect, useState } from "react";

export const useFetchData = API => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);
  //jacobojacome
  // useEffect(() => {
  //   const handleFetchData = async () => {
  //     const response = await fetch(API);
  //     const result = await response.json();
  //     setData(result);
  //   };
  //   handleFetchData();
  // }, [API]);

  const handleFetchData = async e => {
    setData(null);
    setLoader(true);
    e.preventDefault();
    const response = await fetch(API);
    const result = await response.json();
    setTimeout(() => {
      setData(result);
      setLoader(false);
    }, 2000);
  };
  return { data, loader, handleFetchData };
};
