import React from 'react';
import Link from 'next/link';
import PageWrapper from '../../components/pageWrapper';

function Settings() {
  return (
    <PageWrapper title="Settings">
      <p>This is the settings page</p>
      <Link href="/settings/account">
        <a>Go to the account page</a>
      </Link>
    </PageWrapper>
  );
}

export default Settings;
