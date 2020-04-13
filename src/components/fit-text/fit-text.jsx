import React from 'react';
import useFitText from 'use-fit-text';

const FitText = ({
  children,
}) => {

  const { fontSize, ref } = useFitText({ maxFontSize: 1000 });

  return (
    <div ref={ref} style={{ fontSize, height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {children}
    </div>
  );
}

export default FitText;