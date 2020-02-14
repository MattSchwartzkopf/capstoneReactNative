import React from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

class MyBackButton extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  render() {
    return (
      <Button
        title="Go To Event"
        color =  "yellow"
        onPress={() => {
          this.props.navigation.navigate(
            "EventPageDetail",
            {items: this.props.items},
            );
        }}
      />
    );
  }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(MyBackButton);

//https://reactnavigation.org/docs/en/connecting-navigation-prop.html