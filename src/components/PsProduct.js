import React, {Component} from 'react';
import {Progress} from 'semantic-ui-react';

export default class PsProduct extends Component {
  render() {
    const {domain, disklimit, diskusage} = this.props;
    const percentage = Math.round(diskusage / disklimit * 100);

    return (
      <div>
          {domain}
          <Progress percent={percentage} warning>
            {diskusage} / {disklimit} MB
          </Progress>
      </div>
    );
  }
}
