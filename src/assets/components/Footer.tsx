interface Footer {
    text:string;
}

const Footer: React.FC<Footer> = ({text}) => {
    return(
        <>
        <h4 className="footer">{text}</h4>
        </>
    )
}

export default Footer