import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import bodyparts from "../../api/bodyparts";

const AddBalanceSheetModal = ({modalShow, setShow, onSubmit}) => {

  return (
    <>
      <Modal
        size="xl"
        show={modalShow}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Nouvelle mesure de poids
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <>&nbsp;</>
                <svg id="a2584f5a-6b33-4979-a694-f8c5f014bdeb" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 866.36023 454.16675"><path d="M963.88252,673.14318a15.2781,15.2781,0,0,1-5.48163-13.17036c.603-4.91895,4.33768-9.441,9.18212-10.48555s10.36678,1.847,11.83819,6.57926c.80979-9.12369,1.74293-18.62965,6.59367-26.39932a27.95811,27.95811,0,0,1,20.24434-12.96982,25.085,25.085,0,0,1,22.06726,9.00826,22.76627,22.76627,0,0,1,2.79964,23.439c-2.65294,5.50369-7.54057,9.59961-12.66159,12.93185a81.71711,81.71711,0,0,1-55.8893,12.22674" transform="translate(-166.81989 -222.91662)" fill="#f2f2f2"/><path d="M1020.17342,619.38674a133.70074,133.70074,0,0,0-18.63259,18.50211,134.091,134.091,0,0,0-20.98632,35.07028c-.37789.926,1.12583,1.32913,1.49952.4134a133.33652,133.33652,0,0,1,39.219-52.88619c.77634-.63217-.32966-1.72655-1.09959-1.0996Z" transform="translate(-166.81989 -222.91662)" fill="#fff"/><path d="M851.37631,399.08262h14.75958a6,6,0,0,1,6,6V520.71708a13.37977,13.37977,0,0,1-13.37977,13.37977h0a13.37978,13.37978,0,0,1-13.37978-13.37978V405.08262A6,6,0,0,1,851.37631,399.08262Z" transform="translate(-72.10722 853.1037) rotate(-67.09387)" fill="#97e1f4"/><path d="M850.18331,434.80008c-1.85311-2.88125-6.31154-2.95288-9.168-1.06179s-4.49468,5.10768-6.00935,8.18036c-2.69095,5.45887-5.41491,11.01819-6.4021,17.02368s.00073,12.63283,4.02418,17.19926c3.82918,4.34592,9.69284,6.17573,15.24831,7.81474l52.11216,15.37454c5.51292,1.62647,11.54709,3.23432,16.86189,1.04557a17.21845,17.21845,0,0,0,8.02495-7.60152,26.66641,26.66641,0,0,0-4.28284-31.309c-9.36812-9.24018-23.83177-9.99286-36.672-12.86886a97.03226,97.03226,0,0,1-35.3208-15.85252" transform="translate(-166.81989 -222.91662)" fill="#2f2e41"/><path d="M946.12207,676.87012H931.3623a6.50753,6.50753,0,0,1-6.5-6.5V547.35645a6.50753,6.50753,0,0,1,6.5-6.5h14.75977a6.50753,6.50753,0,0,1,6.5,6.5V670.37012A6.50753,6.50753,0,0,1,946.12207,676.87012Z" transform="translate(-166.81989 -222.91662)" fill="#97e1f4"/><path d="M916.92969,676.87012H902.16992a6.50753,6.50753,0,0,1-6.5-6.5V547.35645a6.50753,6.50753,0,0,1,6.5-6.5h14.75977a6.50753,6.50753,0,0,1,6.5,6.5V670.37012A6.50753,6.50753,0,0,1,916.92969,676.87012Z" transform="translate(-166.81989 -222.91662)" fill="#97e1f4"/><circle cx="756.88522" cy="138.56102" r="51" fill="#97e1f4"/><path d="M879.66758,373.88659c-3.30591-.0918-7.42029-.20655-10.59-2.522a8.13274,8.13274,0,0,1-3.20007-6.07275,5.47082,5.47082,0,0,1,1.86035-4.49315c1.65552-1.39894,4.073-1.72707,6.67822-.96144l-2.69921-19.72559,1.98144-.27148,3.17322,23.18994-1.65466-.75928c-1.91834-.87988-4.55164-1.32763-6.188.05518a3.51514,3.51514,0,0,0-1.15271,2.89551,6.14685,6.14685,0,0,0,2.38122,4.52783c2.46668,1.80176,5.74622,2.03418,9.46582,2.13818Z" transform="translate(-166.81989 -222.91662)" fill="#2f2e41"/><rect x="718.32621" y="118.89623" width="10.77161" height="2" fill="#2f2e41"/><path d="M915.55222,355.5142a13.984,13.984,0,0,0,8.54693-11.46717,15.25852,15.25852,0,0,0-6.10845-13.41178c-8.69984-6.56549-20.69477-2.41061-29.80393-7.8227a11.22232,11.22232,0,0,1-5.11038-12.59435c1.25217-5.38172,5.32615-9.31083,9.96211-12.008,9.16646-5.33293,20.32495-7.3218,30.825-6.9337,21.59124.79806,41.48225,12.00884,54.37994,29.1618a88.796,88.796,0,0,1,14.0287,27.98831c3.08505,10.35516,4.79414,21.693,2.83807,32.42467a35.48165,35.48165,0,0,1-16.3251,24.64432c-8.28159,5.39265-17.99382,8.15829-27.58,10.1624-2.3905.49977-4.79149.94709-7.19685,1.36891-1.89819.33288-1.09366,3.22449.79751,2.89284,19.31143-3.3866,42.05116-9.37333,50.50125-29.22964,4.54756-10.686,4.223-22.78541,2.07221-33.9965a93.35957,93.35957,0,0,0-11.372-30.04568c-11.22221-18.86193-29.49-32.97963-51.24613-37.12474a67.57645,67.57645,0,0,0-32.66395,1.57836c-10.00515,3.12228-21.36842,9.34176-22.32885,21.00986a13.91,13.91,0,0,0,6.60677,13.11089c4.3392,2.69714,9.57005,3.356,14.555,3.792,5.37338.47,11.53258.79172,15.84115,4.46215,4.013,3.41862,5.696,9.34236,3.21117,14.14518a10.66244,10.66244,0,0,1-5.22768,4.99967,1.55247,1.55247,0,0,0-1.04765,1.84518,1.50819,1.50819,0,0,0,1.84517,1.04766Z" transform="translate(-166.81989 -222.91662)" fill="#2f2e41"/><path d="M967.27094,440.53613l-.2085-.37536a6.00028,6.00028,0,0,0-5.11377-3.08484l-26.3169-.57672v-3.48053a5.99982,5.99982,0,0,0-6-6h-16a6.00014,6.00014,0,0,0-6,6v2.86694l-23.85693-.52277a6.00005,6.00005,0,0,0-5.269,2.89923v.00006a140.27313,140.27313,0,0,0-2.5127,140.57648l.2085.37537a5.99952,5.99952,0,0,0,5.11328,3.08484l78.17383,1.71313a5.99954,5.99954,0,0,0,5.269-2.89929v-.00006A140.272,140.272,0,0,0,967.27094,440.53613Z" transform="translate(-166.81989 -222.91662)" fill="#2f2e41"/><path d="M901.49376,447.00881h14.75958a6,6,0,0,1,6,6V568.64327A13.37978,13.37978,0,0,1,908.87356,582.023h0a13.37977,13.37977,0,0,1-13.37977-13.37977V453.00881a6,6,0,0,1,6-6Z" transform="translate(1518.49767 990.10662) rotate(-167.53903)" fill="#97e1f4"/><path d="M884.9845,525.61331c-2.55542,2.28154-1.92783,6.69616.38734,9.22115s5.74865,3.63917,9.02065,4.65386c5.813,1.80269,11.73035,3.62225,17.81634,3.6566s12.47679-1.97945,16.35664-6.6685c3.6925-4.46262,4.58128-10.54052,5.32989-16.28414l7.02226-53.8771c.74288-5.69963,1.38573-11.91116-1.60848-16.81753a17.21849,17.21849,0,0,0-8.76467-6.73525,26.66643,26.66643,0,0,0-30.25175,9.134c-7.65876,10.69981-6.13666,25.10282-6.966,38.235a97.03205,97.03205,0,0,1-10.12443,37.36787" transform="translate(-166.81989 -222.91662)" fill="#2f2e41"/><path d="M786.57684,490.379H183.9389a17.13851,17.13851,0,0,1-17.119-17.11914V240.03577a17.13852,17.13852,0,0,1,17.119-17.11915H786.57684A17.13862,17.13862,0,0,1,803.696,240.03577V473.25989A17.13862,17.13862,0,0,1,786.57684,490.379Z" transform="translate(-166.81989 -222.91662)" fill="#3f3d56"/><path d="M786.577,226.41665H183.93885a13.63711,13.63711,0,0,0-13.61894,13.61894V473.25994a13.63711,13.63711,0,0,0,13.61894,13.61894H786.577a13.63711,13.63711,0,0,0,13.61894-13.61894V240.03559A13.63711,13.63711,0,0,0,786.577,226.41665Z" transform="translate(-166.81989 -222.91662)" fill="#fff"/><path d="M800.1959,264.371v208.889A13.63711,13.63711,0,0,1,786.577,486.87888H183.93885a13.63711,13.63711,0,0,1-13.61894-13.61894V450.61847c2.34907-9.65245,11.68674-18.05363,21.86686-20.42841,13.66175-3.18347,27.81684,1.26826,41.16313,5.60927,13.3384,4.34107,27.57,8.66505,41.17186,5.22628,39.47781-9.95034,43.98933-73.9083,83.28842-84.50555,23.016-6.20511,45.64057,9.58434,64.25564,24.48006,18.61549,14.88719,41.16355,30.73623,64.21367,24.6503,16.879-4.4602,28.40369-19.46657,39.84355-32.6514,11.44027-13.18488,26.45486-26.31864,43.84469-24.795,18.20694,1.59171,31.45141,18.675,49.15586,23.20328,23.28,5.94125,46.296-11.46547,60.04254-31.1704,13.73822-19.70487,22.87141-43.06135,40.69514-59.15727C741.14918,261.85143,772.26851,257.04222,800.1959,264.371Z" transform="translate(-166.81989 -222.91662)" fill="#ccc"/><path d="M1031.68145,677.08338h-189.294a1.19069,1.19069,0,1,1,0-2.38137h189.294a1.19068,1.19068,0,1,1,0,2.38137Z" transform="translate(-166.81989 -222.91662)" fill="#3f3d56"/></svg>
              </Col>
              <Col>
                <Form onSubmit={onSubmit}>
                  {
                    bodyparts.map((item, index) => {
                      return (<Form.Group controlId="" key={index}>
                          <Form.Control type="text" placeholder={item.label} name={item.selector}/>
                        </Form.Group>
                      );
                    })
                  }
                  <Button variant="primary" type="submit" >
                    Enregistrer
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
)
}


AddBalanceSheetModal.propTypes = {
  onSubmit: PropTypes.func,
  setShow: PropTypes.func,
  modalShow: PropTypes.bool,
};

export default AddBalanceSheetModal;
