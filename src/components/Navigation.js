import React, {Component} from 'react';


export const Navigation = props =>  {
  
        return (
            <div className={"navigation"}>
                <ul>
                    <li><label>Busses</label><input type="checkbox"></input></li>
                    <li><label>Trains</label><input type="checkbox"></input></li>
                    <li><label>All</label><input type="checkbox"></input></li>
                    <li><button>Update Data</button></li>
                </ul>
            </div>
        );

  }
  
  export default Navigation;