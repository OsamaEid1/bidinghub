// Styles 
let speHeadStyle = {
    width: "fit-content",
    padding: "0 100px",
    textAlign: "center",
    margin: "0 auto 80px",
    borderBottom: "3px solid #d7d7dd",
    position: "relative",
}
let titleStyle = {
    textTransform: "uppercase",
    letterSpacing: ".7px",
    marginBottom: "25px",
}
let iconStyle = {
    padding: "10px 15px",
    backgroundColor: "white",
    position: "absolute",
    left: "50%",
    bottom: "-8px",
    transform: "translateX(-50%) scale(-1,1)",
    color: "#1877f2",
}

const SpecialHeading = (props) => {
    return ( 
        <div className="special-heading" style={speHeadStyle}>
            <h1 style={titleStyle}>{props.title}</h1>
            <i className="fa-solid fa-gavel fa-xl" style={iconStyle}></i>
        </div>
    );
}

export default SpecialHeading;