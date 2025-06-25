'use client';
import React from 'react';
import Button from './button';
//import CompanyFormModal from './company-form-modal';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </div>
  );
}
