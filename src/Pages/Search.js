import { useState } from "react";
import { SingleData } from "../Component/SingleData";
import { useData } from "../Context/DataContext";

export const Search = () => {
  const {
    dataState: { bookData }
  } = useData();

  const [inputVal, setInputVal] = useState();
  const handleSearch = (e) => {
    setInputVal(e.target.value);
  };

  const transformedData = () => {
    let filteredData = [...bookData];

    if (inputVal) {
      filteredData = filteredData.filter((data) =>
        data.title.toLowerCase().includes(inputVal.toLowerCase())
      );
      console.log(filteredData);
    }

    return filteredData;
  };

  return (
    <div>
      <h1>Search</h1>
      <hr />
      <input
        onChange={handleSearch}
        placeholder="Search Here"
        className="search-input"
      />
      {transformedData().length === 0 ? (
        <h1>No Book</h1>
      ) : (
        <ul>
          {transformedData().map((item) => (
            <li key={item.title}>
              <SingleData item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
