import { useAppSelector } from '../../../hooks/redux';

import MessagesItem from './MessagesItem';

import './Messages.scss';

function Messages() {
  const messages = useAppSelector((state) => state.chat.messages);

  return (
    <section className="messages">
      {messages.map((message) => (
        <MessagesItem key={message.id} {...message} />
      ))}
    </section>
  );
}

export default Messages;
