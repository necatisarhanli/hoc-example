import "./styles.css";
import Post from "./post";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { PostData } from "./post/type";

export default function App() {
  const [postData, setPostData] = useState<PostData>();
  const [loading, setLoading] = useState<Boolean>(false);

  const fakeFetchAPI = () =>
    new Promise<PostData>((resolve, reject) => {
      setTimeout(() => {
        resolve({
          avatarSrc: faker.internet.avatar(),
          name: faker.name.firstName(),
          surname: faker.name.lastName(),
          message: faker.lorem.sentences(3),
          nickname: faker.internet.userName()
        });
      }, 2000); // 2sec
    });
  useEffect(() => {
    setLoading(true);
    fakeFetchAPI().then((res) => {
      setLoading(false);
      setPostData(res);
    });
  }, []);

  return (
    <div className="App">
      {loading ? <div>loading...</div> : <Post data={postData} />}
    </div>
  );
}
