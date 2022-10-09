import { PostData } from '../post/type'
import Post from '../post'
import Loader from '../loader'

interface ListProps {
  data?: Array<PostData>;
  loading?: boolean;
}

const List = ({ data, loading }: ListProps): JSX.Element => {
  if (loading) {
    return <Loader />
  } else {
    return <>
      {data?.map((postData, index) => {
        return <Post data={postData} key={`post-${index}`} />
      })}
    </>
  }
}

export default List
