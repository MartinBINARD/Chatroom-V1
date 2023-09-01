import './Form.scss';

function Form() {
  return (
    <form className="form">
      <input
        type="text"
        className="form-input"
        placeholder="Saisissez votre message…"
        aria-label="Saisissez votre message"
      />

      <button type="submit" className="form-button">
        OK
      </button>
    </form>
  );
}

export default Form;
