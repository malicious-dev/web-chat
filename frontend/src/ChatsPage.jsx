import { PrettyChatWindow } from 'react-chat-engine-pretty';
import {
  // ChatEngine,
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID,
    props.user.username,
    props.user.secret
  );

  return (
    <div className="background">
      {/* <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
      /> */}
      <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} />
    </div>
  );
};

export default ChatsPage;
