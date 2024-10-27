import s from "./Options.module.css";
const Options = ({ onUpdate, onReset, total }) => {
  return (
    <>
      <div className={s.box}>
        <button className={s.button} onClick={() => onUpdate("good")}>
          Good
        </button>
        <button className={s.button} onClick={() => onUpdate("neutral")}>
          Neutral
        </button>
        <button className={s.button} onClick={() => onUpdate("bad")}>
          Bad
        </button>
        {total ? (
          <button className={s.button} onClick={() => onReset("reset")}>
            Reset
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Options;
