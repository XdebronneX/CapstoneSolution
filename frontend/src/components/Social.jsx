import React from 'react';
import { Button } from 'primereact/button';
import { MdCopyright } from 'react-icons/md';

const Social = () => {
  return (
    <div className="surface-0 text-700 text-center p-4">
      <section className="mb-5">
        <div className="text-900 font-bold text-5xl mb-3">Visit our Facebook page</div>
        {/* <div className="text-700 text-2xl mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div> */}
        <a href="https://www.facebook.com/profile.php?id=61559731192667" target="_blank" rel="noopener noreferrer">
          <Button label="Facebook Page" icon="pi pi-facebook" className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap" />
        </a>
      </section>
      <footer className="text-900 font-bold mt-5">
        <MdCopyright />&nbsp;Copyright Capstone Solutions. All Rights Reserved.
      </footer>
    </div>
  );
}

export default Social;
