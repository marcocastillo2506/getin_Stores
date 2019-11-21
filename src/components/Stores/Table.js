import React, { Component} from 'react';

import Header from './Head.js';
import Footer from './Foot.js';
import Body from './Body.js';

import data2 from '../../data/brandDateData.json'

class Table extends Component {
  constructor(props){
    super(props)
    this.totals={};
    this.total={};
    this.doSum =this.doSum.bind(this);
    this.granTotals =this.granTotals.bind(this);
    this.combinedTotal =this.combinedTotal.bind(this);
  }

  doSum(obj, property){
    var suma = 0;
    for( var valor in obj[property] ) {
        if( obj[property].hasOwnProperty( valor ) ) {
          suma += parseFloat( obj[property][valor] );
        }
      }
      !this.totals[property] ? this.totals[property]=[suma] : this.totals[property].push(suma)
      return Math.round(suma)
};

  granTotals(obj,property){
  let gTotal = 0;
  for(let i =0; i < obj[property].length; i++){
    gTotal = obj[property][i]+ gTotal
  }
  return gTotal/obj[property].length
}

combinedTotal(obj,property1,property2,index){
  let value1 = 0;
  let value2 = 0;
  for(let i =0; i < obj[property1].length; i++){
    value1 = obj[property1][i]
  }
  for(let i =0; i < obj[property2].length; i++){
    value2 = obj[property2][i]
  }
  let total = (value1/value2).toFixed(3)
  return total
}

  render(){
    console.log(this.totals);
  return(
    <div class="table-container">
    <table className="table">
      <Header />
      <Body doSum={this.doSum} granTotals={this.granTotals} totals={this.totals} total={this.total} combinedTotal={this.combinedTotal} />
      <Footer doSum={this.doSum} granTotals={this.granTotals} totals={this.totals} />
    </table>
    </div>
  )}
}
export default Table;
