import './Messages.scss';
import MessagesItem from './MessagesItem';

function Messages() {
  return (
    <section className="messages">
      <MessagesItem />
      <MessagesItem />
      <MessagesItem />
    </section>
  );
}

export default Messages;
