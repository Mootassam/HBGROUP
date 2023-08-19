import React from "react";

function Recharge() {
  return (
    <div>
      <div>
        <label htmlFor="">Amount</label>
        <input type="text" placeholder="Recharge" />
        <button> Valider </button>
      </div>

      <div>
        <div>
          <label htmlFor="">Upload photo</label>
          <input type="file" name="file" placeholder="uploadphoto" id="" />
        </div>


        <div>
          <label htmlFor="">Hash / TXID </label>
          <input type="text" name="hash" placeholder="uploadphoto" id="" />
        </div>
      </div>
    </div>
  );
}

export default Recharge;
