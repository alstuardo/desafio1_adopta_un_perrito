interface Header {
    title: string;
}

const Header: React.FC<Header> = ({title}) => {
  return (
    <>
    <h1 className="header">{title}</h1>
    </>
  )
}

export default Header