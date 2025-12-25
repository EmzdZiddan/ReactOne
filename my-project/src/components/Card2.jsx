function Card2(props) {
const {title, desc, add} = props;

    return (
        <div className="m-10 bg-blue-600">
            <h1>{title}</h1>
            <p>{desc}</p>
            <p>{add}</p>
        </div>
    );
}


export default Card2;