import React from 'react';
import {render, screen} from '@testing-library/react';
import LoaderMyMeasure from "../Loader";


describe('<ShortBalanceSheetTable>', () => {
  
  it('should have good colums', () => {
    const {container} = render(<LoaderMyMeasure isVisible={true}/>);
  });
});

