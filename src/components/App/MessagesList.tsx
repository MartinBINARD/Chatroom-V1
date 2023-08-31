import { useAppSelector } from '../../hooks/redux';
import Message from './Message';

function MessagesList() {
  const message = useAppSelector((state) => state.message);

  return (
    <section>
      <ul>
        <li>
          <Message text="hello" />
        </li>
      </ul>
    </section>
  );
}

export default MessagesList;
