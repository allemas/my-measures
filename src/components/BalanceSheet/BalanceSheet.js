import React, {useEffect} from 'react';
import {Form, Row, Col, Container} from 'react-bootstrap';
import {useForm, Controller} from "react-hook-form";
import {TextField} from "@material-ui/core";
import {Button} from 'react-bootstrap';
import {pushbalance, getBalance} from '../../api/weight';
import DataTable from "react-data-table-component";
import {connect} from 'react-redux'
import {BalanceSheetColumn} from "./BalanceSheetColumns";

const BalanceSheet = (props) => {

  useEffect(() => {
    getBalance({user_uid: '7b129eb6-106a-4327-976d-a9a28e941fa9'}).then(response => {
      props.loadBalanceSheet(response.data);
    }).catch(console.log);
  });


  const {errors, register, control, handleSubmit} = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: true,
  });

  /*
  * https://thoughtbot.com/blog/using-redux-with-react-hooks
  * */

  const onSubmit = data => {
    const date = new Date();
    pushbalance({
      "date": date.toISOString(),
      "chest": parseInt(data.chest),
      "shoulders": parseInt(data.shoulders),
      "arms": parseInt(data.arms),
      "back": parseInt(data.back),
      "waist": parseInt(data.waist),
      "thigh": parseInt(data.thigh),
      user: props.user.uid
    }).then((response) => {
        let data = response.data;
        props.publishBalanceSheet({
            "chest": parseInt(data.chest),
            "shoulders": parseInt(data.shoulders),
            "arms": parseInt(data.arms),
            "back": parseInt(data.back),
            "waist": parseInt(data.waist),
            "thigh": parseInt(data.thigh),
          }
        );
      }
    ).catch(data => console.log(data)
    )
    ;
  };



  return (<>
    <Container fluid>
      <Row>
        <Col> &nbsp;
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          {errors.chest && errors.chest.message}
          {errors.shoulders && errors.shoulders.message}
          {errors.thighs && errors.thighs.message}
          {errors.arms && errors.arms.message}
          {errors.back && errors.back.message}
          {errors.waist && errors.waist.message}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
              <Controller as={TextField} name="chest" placeholder="Pectoraux" control={control} defaultValue=""
                          rules={{required: "Mesure pectoraux requis"}}
              />
              <Controller as={TextField} name="shoulders" placeholder="Epaules" control={control} defaultValue=""
                          rules={{required: "Mesure Epaules requis"}}
              />
              <Controller as={TextField} name="thigh" placeholder="Cuisses" control={control} defaultValue=""
                          rules={{required: "Mesure Cuisses requis"}}
              />
              <Controller as={TextField} name="arms" placeholder="Bras" control={control} defaultValue=""
                          rules={{required: "Mesure Bras requis"}}
              />
              <Controller as={TextField} name="back" placeholder="Dos" control={control} defaultValue=""
                          rules={{required: "Mesure Dos requis"}}
              />
              <Controller as={TextField} name="waist" placeholder="Taille" control={control} defaultValue=""
                          rules={{required: "Mesure Taille requis"}}
              />
              <Button type="submit">
                Envoyer
              </Button>
            </Form.Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <DataTable
            title="Evolution"
            columns={BalanceSheetColumn}
            responsive={true}
            data={props.balance.map(item => {
              var mydate = new Date(item.date);
              return {
                ...item,
                'date': mydate.toLocaleDateString('fr-FR') + ' ' + mydate.toLocaleTimeString('fr-FR')
              }
            })
            }
            pagination={true}
          />
        </Col>
      </Row>
    </Container>
  </>)
    ;


}


const mapStateToProps = (state) => ({
  user: state.user,
  balance: state.balanceSheet
});

const mapDispatchToProps = (dispatch) => ({
  publishBalanceSheet: data => dispatch({type: 'BALANCE_SHEET_ADD', data: data}),
  loadBalanceSheet: data => dispatch({type: 'BALANCE_SHEET_LOAD_ASYNC', data: data}),
});

export default connect(mapStateToProps, mapDispatchToProps)(BalanceSheet);
