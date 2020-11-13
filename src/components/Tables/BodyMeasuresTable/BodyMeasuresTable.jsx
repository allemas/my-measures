import React from "react";
import PropTypes from 'prop-types';
import DataTable from "react-data-table-component";

import {BodyMeasuresTableColumns} from './BodyMeasuresTableColumns.js';


const dateHelperFormater = (date) => {
  var dateFormated = new Date(date);
  return dateFormated.toLocaleDateString('fr-FR') + ' - ' + dateFormated.toLocaleTimeString('fr-FR');
}

const BodyMeasuresTable = (props) => {
  return (
    <>
      <DataTable
        title="Evolution"
        columns={BodyMeasuresTableColumns}
        responsive={true}
        data={props.bodydata.map(item => ({...item, 'date': dateHelperFormater(item.date)}))}
        pagination={true}
      />
    </>
  )
}

BodyMeasuresTable.propTypes = {
  bodydata: PropTypes.array,
};


export default BodyMeasuresTable;
