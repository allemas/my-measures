import {Toast} from "react-bootstrap";
import React from "react";

const MeasureSuccessToast = ({showA, setShowToast}) => {
  const toggleShowA = () => setShowToast(!showA);

  return (<div
    style={{
      position: 'absolute',
      top: 50,
      right: 0,
    }}
  >
    <Toast show={showA} onClose={toggleShowA}>
      <Toast.Header>

        <strong className="mr-auto">Bravo !</strong>
        <small></small>
      </Toast.Header>
      <Toast.Body>Votre enregistrement s'est déroulé avec succès!</Toast.Body>
    </Toast>
  </div>)

}
export default MeasureSuccessToast;
