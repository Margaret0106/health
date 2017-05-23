import React from 'react';
import { Label, Icon } from 'semantic-ui-react';

export default class PageSpeedLabel extends React.Component {
  render () {
    const { score, iconName } = this.props;

    const getColor = () => {
      if (score > 85) {
        return 'green';
      };

      if (score > 60) {
        return 'yellow';
      }

      return 'red';
    }

    return (
      <Label color={ getColor() }>
        <Icon name={iconName} />
        { score }
      </Label>
    );
  }
}
