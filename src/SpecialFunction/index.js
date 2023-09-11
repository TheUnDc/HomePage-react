import "./style.css";

const SpecialFunction = () => {

    return (
        <aside>
            <h3 className="specialFunction__boxModel specialFunction__boxModel--header" >
                🤔Napisz co o tym myślisz:
            </h3>

            <p>
                <textarea id="idBlockadeButton" className="comment__boxModel" name="description"
                    placeholder="Tu pisz...">

                </textarea>
            </p>

            <p>
                <button className="specialFunction__boxModel button__specialFunction">
                    ❓Magic button #1. Zweryfikuj opinię.❓
                </button>
                <button className="specialFunction__boxModel button__specialFunction">
                    ❓Magic button #2 Tartar.❓
                </button>
            </p>
        </aside>
    )
};

export default SpecialFunction;