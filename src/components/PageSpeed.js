import React from 'react';

import PageSpeedLabel from './PageSpeedLabel'

export default ({desktop, mobile, usability}) => {
  return (
    <div>
      <PageSpeedLabel score={desktop} iconName='desktop' />

      <PageSpeedLabel score={mobile} iconName='mobile' />

      <PageSpeedLabel score={usability} iconName='thumbs up' />
    </div>
  );
};
