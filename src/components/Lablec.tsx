import { LablecAdatok } from "../data/LablecAdatok";

function Lablec() {

  return (
    <>
    <div className="row">
        <div className="col-sm-12 kartya mb-3">
          <div className="card">
            <div className="card-header">Amit érdemes megjegyezni</div>
            <div className="card-body">
              <ul>
                {LablecAdatok.map((lablec) => (
                  <li className="list-group-item">
                    {lablec.szoveg}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </div>

    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 kartya mb-3">
          <p className="text-center">
            <b>Az oldalt készítette: </b>
            <i>Gipsz Jakab</i>
          </p>

          <p style={{ textAlign: "center" }}>
            <span style={{ fontWeight: "bold" }}>Készítés dátuma: </span>
            <span className="dolt">2026.10.04.</span>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Lablec