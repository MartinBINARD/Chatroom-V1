import './Messages.scss';
import MessagesItem from './MessagesItem';

function Messages() {
  return (
    <section className="messages">
      <MessagesItem author="Super Chat" content="Salut, ça va ?" />
      <MessagesItem
        author="Super Chat"
        content="T'as pas des super-croquettes ?"
      />
      <MessagesItem author="Super Chat" content="Stp" />
    </section>
  );
}

export default Messages;
