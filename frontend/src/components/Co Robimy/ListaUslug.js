import "../../sass/components/listauslug.css";
import eu from "../../images/eu.jpg";
import kurs from "../../images/kurs.jpg";
import sala from "../../images/sala.jpg";
import { Link } from "react-router-dom";

const ListaUslug = () => {
    return (
        <div className="containeru">
            <div  className="sectionu" style={{ backgroundImage: `url(${eu})` }}>
                <div className="contentu">
                <Link className='text-white' to={'/corobimy/dotacje'}><h1>Projekty</h1></Link>
                </div>
                <div className="overlayu"></div>
            </div>
            
                <div  className="sectionu" style={{ backgroundImage: `url(${kurs})` }}>
                    <div className="contentu">
                        <Link className='text-white' to={'/corobimy/projekty'}><h1>Kursy</h1></Link>
                    </div>
                    <div className="overlayu"></div>


                </div>
            
            <div  className="sectionu" style={{ backgroundImage: `url(${sala})` }}>
                <div className="contentu">
                <Link className='text-white' to={'/corobimy/uslugi'}><h1>Usługi</h1></Link>
                </div>
                <div className="overlayu"></div>
            </div>
        </div>
    )
}

export default ListaUslug;