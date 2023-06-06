import styles from "../../../../styles/SingleMessage.module.css";
const SingleMessage = (props) => {
  const dateString = props.date;
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  const formattedDate = `${formatNumber(hours)}:${formatNumber(
    minutes
  )}, ${day}/${month}/${year}`;


  const handleChangeSelectedMessage = () =>{
    const message = {
      author : props.author,
      receiver : props.receiver,
      header : props.header,
      date : formattedDate,
      content : props.content
    }
    props.handleChangeSelectedMessage(message);
  }
  return (
    <div className={styles["container"]} onClick={handleChangeSelectedMessage}>
      <div className={styles["my-paragraph"]}>From: {props.author}</div>
      <div className={styles["my-paragraph"]}>To: {props.receiver}</div>
      <div className={styles["my-paragraph"]}>Title: {props.header}</div>
      <div className={styles["my-paragraph"]}>{formattedDate}</div>
    </div>
  );
};
export default SingleMessage;
