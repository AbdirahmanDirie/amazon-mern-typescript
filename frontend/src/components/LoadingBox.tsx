import Spinner  from "react-bootstrap/Spinner";


const LoadingBox = () => {
  return (
    <Spinner animation="border" role="status">
        <span className="visally-hoddien ">Loading...</span>
    </Spinner>
  )
}

export default LoadingBox
