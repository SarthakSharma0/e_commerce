import React from 'react'

export default function Itemtemplate(props) {
  const { item } = props;

  return (
    <div>
      <div class="container text-center">
        <div class="row" style={{padding:"4px"}}>
          <div class="col" style={{borderRight: "1px solid black"}}>
            <b>{item.itemCategory}</b>
          </div>
          <div class="col" style={{borderRight: "1px solid black"}}>
            <b>{item.itemName}</b>
          </div>
          <div class="col">
            <b>{item.itemPrice}</b>
          </div>
        </div>
      </div>
    </div>
  )
}
