import React, { useState } from 'react'
import Overlay from './Overlay';
import Cards from '../Cards/Cards.js';
import Api from '../Cards/api.js';

const Expand = ({Api}) => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    return (
      <>
        <Cards data={Api} open={openModal}/>
        {open && <Overlay close={closeModal}></Overlay>}
      </>
    );
};

export default Expand
