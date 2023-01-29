
import "../../sass/components/projekt.css";
const Projekt = (props) => {
    return (
        <a href={props.photo} className="cardi" style={{backgroundImage:`url(${props.photo})`}}>
            <div className="inneri">
                <h2 className="titlei">{props.title}</h2>
                <time className="subtitlei">{props.date}</time>
            </div>
        </a>
    )
}

export default Projekt