import { useState, useEffect } from "react";
import axios from "axios";
import List from "./list";

function AktualnosciList() {
  const [news, setNewNews] = useState(null);

  useEffect(() => {
    getNews();
  }, []);

  function getNews() {
    axios({
      method: "GET",
      url: "/api/aktualnoscis/",
    })
      .then((response) => {
        const data = response.data;
        setNewNews(data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  const title = news
  return (
    <div className="">
      {news &&
        news.map((aktualnosc) => (
          <List
            title={aktualnosc.title} /> ))}
    </div>
  );
}

export default AktualnosciList;
