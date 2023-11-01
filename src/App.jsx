import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [initialData, setData] = useState([]);
  const [isError, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("there was an arror ! please try again");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="loading"></div>;
  }
  if (isError) {
    return <h2>oups there was an error</h2>;
  }

  const handleClick = (index) => {
    setPage(index);
  };

  return (
    <section className="jobs-center">
      <BtnContainer
        initialData={initialData}
        handleClick={handleClick}
        page={page}
      />
      <JobInfo initialData={initialData} page={page} />
    </section>
  );
};
export default App;
