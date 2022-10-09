import "./style.css";
import { PostProps } from "./type";

const Post = ({ data }: PostProps): JSX.Element => {
  return (
    <div className="post">
      <div className="post__avatar">
        <img src={data?.avatarSrc} alt="user avatar" />
      </div>
      <div className="post__content">
        <div className="post__content_info">
          <div className="post__content_info-name">{`${data?.name} ${data?.surname}`}</div>
          <div className="post__content_info-nickname">{`@${data?.nickname}`}</div>
        </div>
        <div className="post__content_body">
          <div className="post__content_body-message">{data?.message}</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
