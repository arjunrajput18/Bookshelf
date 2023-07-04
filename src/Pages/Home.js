import { SingleData } from "../Component/SingleData";
import { useData } from "../Context/DataContext";

export const Home = () => {
  const {
    dataState: { bookData }
  } = useData();

  const transformedData = () => {
    let filteredData = [...bookData];

    const CurrentlyReading = filteredData.filter(
      (data) => data.status === "Currently Reading"
    );
    const Read = filteredData.filter((data) => data.status === "Read");

    const WantToRead = filteredData.filter(
      (data) => data.status === "Want to Read"
    );

    return { CurrentlyReading, Read, WantToRead };
  };

  const { CurrentlyReading, Read, WantToRead } = transformedData();

  return (
    <div>
      <h1>Currently Reading</h1>
      <hr />
      <ul>
        {CurrentlyReading.map((data) => (
          <li key={data.title}>
            <SingleData item={data} />
          </li>
        ))}
      </ul>
      <h1> Want to Read</h1>
      <hr />
      <ul>
        {WantToRead.map((data) => (
          <li key={data.title}>
            <SingleData item={data} />
          </li>
        ))}
      </ul>
      <h1> Read</h1>
      <hr />
      <ul>
        {Read.map((data) => (
          <li key={data.title}>
            <SingleData item={data} />
          </li>
        ))}
      </ul>
    </div>
  );
};
