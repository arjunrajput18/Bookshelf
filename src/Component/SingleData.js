import { useData } from "../Context/DataContext";

import "./SingleData.css";
export const SingleData = ({ item }) => {
  const { dataDispatch } = useData();
  const handleChange = (e) => {
    if (e.target.value !== "✔" + item.status) {
      dataDispatch({
        type: "NEW_STATUS",
        payload: { newStatus: e.target.value, title: item.title }
      });
    }
  };

  const { img } = item;
  const statusArray = ["Read", "Currently Reading", "Want to Read", "none"];
  return (
    <div className="Container">
      <div className="mainContainer">
        <img src={img} alt="img" className="img-resize" />
        <p className="w">Title:-{item.title}</p>
        <p>author:{item.author}</p>
        <p>Status:{item.status}</p>

        <select onChange={handleChange} className="dropdown">
          <option className="MoveTo">Move To</option>
          {statusArray?.map((data) => (
            <option key={data}>
              {item.status === data ? "✔" : ""}
              {data}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
