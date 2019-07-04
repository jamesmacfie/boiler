import React from 'react';
import Link from 'next/link';
import PageWrapper from '../../../components/pageWrapper';

function Account() {
  return (
    <PageWrapper title="Settings - Accounts">
      <p>This is the settings accounts page</p>
      <Link href="/settings">
        <a>Back to settings</a>
      </Link>
    </PageWrapper>
  );
}

export default Account;
