import s from "./Description.module.css";
const Description = ({ title, text }) => {
  return (
    <>
      <div className={s.box}>
        <h1 className={s.title}>{title}</h1>
        <p className={s.text}>{text}</p>
      </div>
    </>
  );
};

export default Description;
