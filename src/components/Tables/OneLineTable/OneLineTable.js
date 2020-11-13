import React from "react";
import PropTypes from 'prop-types';
import DataTable from "react-data-table-component";

import {OneLineTableColumns} from "./OneLineTableColumns";


const OneLineTable = (props) => {

  var date = new Date(props.balances[0].date);
  var title = "Mesures au " + date.toLocaleDateString('fr-FR');

  var data = props.balances.map(item => {

    var date = new Date(item.date);
    return {
      ...item,
      'date': date.toLocaleDateString('fr-FR') + ' ' + date.toLocaleTimeString('fr-FR')
    }
  })

  return (<>
    <DataTable
      title={title}
      columns={OneLineTableColumns}
      responsive={true}
      data={data}
      pagination={false}
    />
  </>);
};

OneLineTable.propTypes = {
  balances: PropTypes.array,
};


export default OneLineTable;
