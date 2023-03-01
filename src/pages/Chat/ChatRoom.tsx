import Chat from './Chat';
import { useParams } from 'react-router-dom';

const ChatRoom = () => {
  const param = useParams();

  return <Chat roomId={param} />;
};

export default ChatRoom;
