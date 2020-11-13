import React from 'react';
import {render, screen} from '@testing-library/react';


import OneLineTable from "../OneLineTable";
import {OneLineTableColumns} from '../OneLineTableColumns';

describe('<ShortBalanceSheetTable>', () => {

  it('should have metrics in table', () => {
    var data = [{
        "id": 21,
        "chest": 120,
        "shoulders": 80,
        "arms": 2,
        "back": 45,
        "waist": 32,
        "thigh": 33,
        "user": "/users/63d84859-ea7d-498f-886d-719165d579f6",
        "date": "2020-11-10T23:24:08+00:00"
      }]
    ;

    const {container} = render(<OneLineTable balances={data}/>);
    var dataTest = {
      "chest": 120,
      "shoulders": 80,
      "arms": 2,
      "back": 45,
      "waist": 32,
      "thigh": 32,
    };

    for (const [key, value] of Object.entries(dataTest)) {
      expect(screen.getByText(`${value}`)).toBeInTheDocument();
    }
  });

  it('should have good colums', () => {
    var data = [{
        "id": 21,
        "chest": 120,
        "shoulders": 80,
        "arms": 2,
        "back": 45,
        "waist": 32,
        "thigh": 32,
        "user": "/users/63d84859-ea7d-498f-886d-719165d579f6",
        "date": "2020-11-10T23:24:08+00:00"
      }]
    ;
    const {container} = render(<OneLineTable balances={data}/>);
    OneLineTableColumns.map((columns) => {
      expect(screen.getByText(columns.name)).toBeInTheDocument();
    })
  });
});

