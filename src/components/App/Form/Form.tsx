import './Form.scss';

function Form() {
  /*
    Pour rappel, les champs de formulaires DOIVENT être contrôlés.

    MAIS on ne les contrôle pas dans Redux :
    le contrôle se fait souvent sur l'évènement `onChange`,
    inutile de dispatcher une action à chaque saisie de l'utilisateur.

    Même Redux le dit :
    https://redux.js.org/tutorials/fundamentals/part-5-ui-react#global-state-component-state-and-forms
    
    La procédure :
    - je contrôle mon champ avec un _state_ (React) local → `useState`
    - à la soumission, je dispatche une action avec le contenu de mon champ
    pour modifier mon _state_ (Redux) global
    
    Ici et à BUT PÉDAGOGIQUE (pour s'exercer à Redux), je vais contrôler
    mon champ dans Redux (Booooh ! Remboursé !).
    Je ferai un commit rectificatif par la suite pour avoir une belle application…
  */

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
