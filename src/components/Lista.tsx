import { ListaAdatok } from "../data/ListaAdatok";

function Lista() {
  return (
    <>
      <div className="row mb-2">
        {ListaAdatok.map((lista) => (
          <div className="col-sm-4 kartya mb-2">
            <h2>{lista.cim}</h2>
            <ul className="list-group">
              {lista.elemek.map((elem, index) => (
                <li key={index} className="list-group-item">
                  {elem}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Lista;
