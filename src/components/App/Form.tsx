function Form() {
  return (
    <form action="submit" className="form">
      <input
        type="text"
        className="form-input-comment"
        placeholder="Insérer votre commnetaire ..."
      />
      <button type="button" className="form-button">
        Bouton
      </button>
    </form>
  );
}

export default Form;
