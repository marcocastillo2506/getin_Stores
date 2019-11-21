import React, { Component} from 'react';



import Header from './Head.js';
import Footer from './Foot.js';
import Body from './Body.js';

class Table extends Component {
  constructor(props){
    super(props)
    this.totals={};
    this.doSum =this.doSum.bind(this);
    this.granTotals =this.granTotals.bind(this);
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
  render(){
  return(
    <div class="table-container">
    <table className="table">
      <Header />
      <Footer />
      <Body doSum={this.doSum} granTotals={this.granTotals} totals={this.totals}/>
    </table>
    </div>
  )}
}
export default Table;
