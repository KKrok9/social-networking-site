import SingleMessage from "./singleMessage/SingleMessage";
import styles from "../../../styles/MessagesList.module.css";
const MessagesList = (props) => {
  const messages = props.messages;

  return (
    <div className={styles["container"]}>
      <h2 className={styles.parag}>Your messages</h2>
      {messages.length === 0 ? (
        <p className={styles.parag}>There's nothing to see</p>
      ) : (
        messages.map((element) => {
          return (
            <SingleMessage
              author={element.author.email}
              receiver={element.receiver}
              header={element.header}
              content={element.content}
              date={element.date}
              key={element._id}
              id={element._id}
              handleChangeSelectedMessage={props.handleChangeSelectedMessage}
            ></SingleMessage>
          );
        })
      )}
    </div>
  );
};
export default MessagesList;
