import { useEffect, useState } from "react";

const UseLoader = (category, currentPage, itemsPerPage) => {
  // console.log(category)
  const [legos, setLegos] = useState([]);
  useEffect(() => {
    fetch(
      `https://batch-7-assignment-11-server.vercel.app/toys?category=${category}&page=${currentPage}&items=${itemsPerPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setLegos(data);
      });
  }, [category, currentPage, itemsPerPage]);
  return [legos];
};

export default UseLoader;
