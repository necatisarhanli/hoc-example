interface PostProps {
  data?: PostData;
}

interface PostData {
  name: string;
  surname: string;
  avatarSrc: string;
  message: string;
  nickname: string;
}

export { PostData, PostProps };
