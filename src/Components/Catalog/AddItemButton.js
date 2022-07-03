import React from 'react';
import { IaraHutContext } from '../../Context/IaraHutContext';
import { GrAddCircle } from "react-icons/gr";
export default function AddButton(props) {
  const { cartControl } = React.useContext(IaraHutContext);
  const { id } = props;

  return (
    <>
      <button
      className="btn-add mt-2"
      onClick={() => {cartControl('add', id); }}
      >
        <GrAddCircle size="20px" />
      </button>
    </>
  )
}