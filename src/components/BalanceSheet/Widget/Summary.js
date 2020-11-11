import React, {useEffect, useState} from "react";
import DataTable from "react-data-table-component";
import {BalanceSheetColumn} from "../BalanceSheetColumns";


const Summary = (props) => {

  var BalanceSheet = BalanceSheetColumn.filter((item) => {
    return (item.name == "Date") ? false : true;
  });

  if (props.balances != false) {
    var date = new Date(props.balances[0].date);
    var title = "Mesures au " + date.toLocaleDateString('fr-FR');
  }

  return (<>
    {props.balances != false &&
    <DataTable
      title={title || ""}
      columns={BalanceSheet}
      responsive={true}
      data={props.balances.map(item => {
        var mydate = new Date(item.date);

        return {
          ...item,
          'date': mydate.toLocaleDateString('fr-FR') + ' ' + mydate.toLocaleTimeString('fr-FR')
        }
      })
      }
      pagination={false}
    />
    }
  </>);
}

export default Summary;
