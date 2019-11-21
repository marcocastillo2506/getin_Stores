import React from 'react';
import Row from './Row'


const Footer = (props) => {
  return(
  <tfoot>
  <tr>
    <th>Totales</th>
    <th>
    {
     <Row val = {props.granTotals(props.totals, "peasants")}/>

    }
    </th>
    <th>
    {
     <Row val = {props.granTotals(props.totals, "visitors")}/>

    }
    </th>
    <th>
    {
     <Row val = {0}/>

    }
    </th>
    <th>
    {
     <Row val = {0}/>

    }
    </th>
    <th>
    {
     <Row val = {props.granTotals(props.totals, "tickets")}/>

    }
    </th>
    <th>
    {
     <Row val = {0}/>

    }
    </th>
    <th>
    {
     <Row val = {props.granTotals(props.totals, "revenue")}/>

    }
    </th>
    <th>
    {
     <Row val = {0}/>

    }
    </th>
    <th>
    {
     <Row val = {props.granTotals(props.totals, "items")}/>

    }
    </th>
    <th>
    {
     <Row val = {0}/>

    }
    </th>
    <th>
    {
     <Row val = {0}/>

    }
    </th>
  </tr>
  </tfoot>
  )
};

export default Footer;
