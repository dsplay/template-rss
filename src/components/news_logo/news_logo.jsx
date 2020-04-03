import React from 'react';
import { template } from '@dsplay/template-utils';
import './news_logo.scss';

export default function NewsLogo() {
  const { logo } = template;
  return (
    <div>
      <img src={logo} alt='Logo' className='logo' />
    </div>
  );
}
