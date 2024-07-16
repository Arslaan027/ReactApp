import style from "./errorMsg.module.css";

function ErrorMsg({ Items }) {
  return (
    <>
      {Items.length === 0 && (
        <h3 className={style.head}>
          you can add Items, Buy feature is not working yet
        </h3>
      )}
    </>
  );
}

export default ErrorMsg;
