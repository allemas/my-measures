import React from 'react';
import DataTable from 'react-data-table-component';

class OverviewTab extends React.Component {
  setColumns() {
    return [
      {
        name: 'Date',
        selector: 'date',
        maxWidth: '250px',
        sortable: true,
      },
      {
        name: 'Pectoraux',
        selector: 'chest',
      },
      {
        name: 'Epaules',
        selector: 'shoulders',
      },
      {
        name: 'Cuisses',
        selector: 'thighs',
      },
      {
        name: 'Bras',
        selector: 'arms',
      },
      {
        name: 'Dos',
        selector: 'back',
      },
      {
        name: 'Taille',
        selector: 'waist',
      },
    ]
  }

  render() {
    return (
      <>
        <DataTable
          title="Bilan"
          data={this.props.measures}
          columns={this.setColumns()}
          responsive={true}
          pagination={true}
          expandableRowsHideExpander='sm'
        />
      </>
    );
  }

}

export default OverviewTab;
