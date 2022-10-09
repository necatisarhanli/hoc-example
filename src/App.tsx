import "./styles.css";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { PostData } from "./post/type";
import List from './list'
export default function App() {
  const [postList, setPostList] = useState<Array<PostData>>();
  const [loading, setLoading] = useState<boolean>(false);

  const fakeFetchAPI = ():Promise<Array<PostData>> =>{
    setLoading(true);
    return new Promise<Array<PostData>>((resolve) => {
      setTimeout(() => {
        resolve([1,2,3,4,5].map((item)=>{
            return {
          avatarSrc: faker.internet.avatar(),
          name: faker.name.firstName(),
          surname: faker.name.lastName(),
          message: faker.lorem.sentences(3),
          nickname: faker.internet.userName()
        }
        }));
      }, 2000); // 2sec
    })};
    
    
  useEffect(() => {
    fakeFetchAPI().then((res) => {
      setPostList(res);
    }).finally(()=>{
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
        <List data={postList} loading={loading}/>
    </div>
  );
}
