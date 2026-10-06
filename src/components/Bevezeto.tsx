import { ParagrafusAdatok } from '../data/ParagrafusAdatok';

function Bevezeto() {

  return (
    <>
      <div className="row mb-2">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
                Mit érdemes tudni az állatkerti állatokról?
            </div>
            <div className="card-body">
                {
                    ParagrafusAdatok.map((paragrafus) => (
                        <p>{paragrafus.szoveg}</p>
                    ))
                }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bevezeto