function Headshot (props) {
    return (
        <img className={props.title} src={props.image} alt={props.title} />
    )
}
export default Headshot;