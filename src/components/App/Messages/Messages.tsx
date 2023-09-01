import { useEffect } from 'react';
import { useAppSelector } from '../../../hooks/redux';

import MessagesItem from './MessagesItem';

import './Messages.scss';

/*
  Objectif:
  je veux scroller en bas de `.messages` à l'initialisation
  et à chaque nouveau message

  1. « à l'initialisation et à chaque nouveau message »
    → useEffect(effect, [messages])

  2. je veux cibler ma `section.messages`

  3. scroll → scrollTo(x, y)
*/

function Messages() {
  const messages = useAppSelector((state) => state.chat.messages);

  useEffect(() => {
    const sectionElement = document.querySelector('.messages');
    sectionElement?.scrollTo(0, sectionElement?.scrollHeight);
  }, [messages]);

  return (
    <section className="messages">
      {messages.map((message) => (
        <MessagesItem
          key={message.id}
          // au lieu de :
          // id={message.id}
          // author={message.author}
          // content={message.content}
          // je peux déverser mon objet
          // → toutes les propriétés de `message` vont devenir des props
          {...message}
        />
      ))}
    </section>
  );
}

export default Messages;
