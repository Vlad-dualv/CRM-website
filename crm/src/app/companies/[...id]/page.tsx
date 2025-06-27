import React from 'react';
import Header from '../../components/header';

export interface PageProps {
  params: { id: string[] };
}

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default function Page({ params }: PageProps) {
  return (
    <div>
      <Header>Companies ({String(params.id)}) </Header>
      <p>{new Date().toTimeString()}</p>
    </div>
  );
}
