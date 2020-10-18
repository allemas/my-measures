import React, {useState} from "react";
import DataTable from "react-data-table-component";
import {Button, Modal} from "react-bootstrap";
import {deleteUserWeight} from '../../api/weight';

const WeightTable = (props) => {
  const [modalshow, setShow] = useState(false);
  const [selectedRow, setSelectedRow] = useState(false);

  const columns = [
    {
      name: 'Date',
      selector: 'date',
      maxWidth: '250px',
      sortable: true,
    },
    {
      maxWidth: '100px',
      name: 'Poids',
      selector: 'value',
      left: true,
      sortable: true,
    },
    {
      wrap: true,
      name: 'Comment je me sens ?',
      selector: 'feeling',
      hide: 'sm',
      compact: true,
    },
    {
      name: 'Action',
      button: true,
      cell: (row) => <DeleteBtn row={row}/>,
    },
  ];

  const DeleteBtn = (row) => (
    <a href="#" onClick={(e) => {
      e.preventDefault();
      setSelectedRow(row);
      setShow(true);
    }}>Supprimer</a>
  );

  return (
    <>
      <Modal
        size="xs"
        show={modalshow}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Ho ?!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Etes vous sur de vouloir supprimer cette valeur ?</p>
          <Button variant="success" onClick={() => {
            deleteUserWeight(selectedRow.row.id).then(response => {
              props.dispatch({
                type: "SUPR_WEIGHT",
                id: selectedRow.row.id,
              })
              setShow(false);
            }).catch(console.log);
          }}>Confirmer</Button>
        </Modal.Body>
      </Modal>

      <DataTable
        title="Evolution du poids"
        columns={columns}
        responsive={true}
        data={props.weight.map(item => {
          var mydate = new Date(item.date);
          return {
            ...item,
            'date': mydate.toLocaleDateString('fr-FR') + ' ' + mydate.toLocaleTimeString('fr-FR')
          }
        })
        }
        defaultSortField="date"
        pagination
      />

    </>
  )

}

export default WeightTable;
