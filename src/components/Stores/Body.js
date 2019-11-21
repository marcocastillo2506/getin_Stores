import React, { Component } from 'react';
import Row from './Row.js';

import data from '../../data/assignedStore.json'
import data2 from '../../data/brandDateData.json'

const body = props => (
      <tbody>
      <td>
      { data.data.map(nameDetail =>{
        return (<Row val = {nameDetail.name} />);
        })
      }
      </td>
      <td>
      { data2.map(x =>{
        return (<Row val = {props.doSum(x, "peasants")}/>);
        })
      }
      </td>
      <td>
      { data2.map(x =>{
        return (<Row val = {props.doSum(x, "visitors")}/>);
        })
      }
      </td>
      <td>
      {
       <Row val = {props.combinedTotal(props.totals, "visitors","peasants",0)}/>

      }
      </td>
      <td>
      { data2.map(x =>{
        return (<Row val = {props.doSum(x, "cabinet")}/>);
        })
      }
      </td>
      <td>
      { data2.map(x =>{
        return (<Row val = {props.doSum(x, "tickets")}/>);
        })
      }
      </td>
      <td>
      {
       <Row val = {props.combinedTotal(props.totals, "tickets","visitors",  0)}/>

      }
      </td>
      <td>
      { data2.map(x =>{
        return (<Row val = {props.doSum(x, "revenue")}/>);
        })
      }
      </td>
      <td>
      {
         <Row val = {props.combinedTotal(props.totals, "revenue","tickets",  0)}/>
      }
      </td>
      <td>
      { data2.map(x =>{
        return (<Row val = {props.doSum(x, "items")}/>);
        })
      }
      </td>
      <td>
      { data2.map(x =>{
        return (<Row val = {props.doSum(x, "imperticket")}/>);
        })
      }
      </td>
      <td>
      { data2.map(x =>{
        return (<Row val = {props.doSum(x, "permanenceCount")}/>);
        })
      }
      </td>
      </tbody>
    );

export default body;
