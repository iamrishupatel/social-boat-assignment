import "./styles/style.scss";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import { LoadingOutlined } from "@ant-design/icons";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);

  const baseURL =
    "https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos";

  const fetchVideos = async (query, numResults = 12) => {
    setLoading(true);
    axios
      .get(baseURL, {
        params: {
          q: query,
          numResults,
        },
      })
      .then((res) => {
        if (res.data.status !== "success") {
          return;
        }
        setData(res.data.results);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchVideos("home");
  }, []);

  return (
    <Fragment>
      <Header fetchVideos={fetchVideos} />
      <main>
        {loading ? (
          <LoadingOutlined style={{ fontSize: "2rem" }} />
        ) : (
          <Results videos={data} />
        )}
      </main>
    </Fragment>
  );
};

export default App;
