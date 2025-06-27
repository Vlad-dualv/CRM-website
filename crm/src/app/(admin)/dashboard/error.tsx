import React from 'react';

export interface ErrorComponentProps {
  error: Error;
}

export default function ErrorComponent({ error }: ErrorComponentProps) {
  return (
    <div>
      <p>{`Something went wrong. ${error.message}`}</p>
    </div>
  );
}
