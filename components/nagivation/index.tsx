import React from 'react';
import Link from 'next/link';

const pages = [
  {
    href: '/',
    text: 'Home'
  },
  {
    href: '/settings',
    text: 'Settings'
  }
];

const Navigation = () => {
  return (
    <ul>
      {pages.map(({ href, text }) => (
        <li key={href}>
          <Link href={href}>
            <a>{text}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
