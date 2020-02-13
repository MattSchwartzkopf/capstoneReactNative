import React from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class MyBackButton extends React.Component {
  render() {
    return (
      <Button
        title="Go To Event"
        color =  "yellow"
        onPress={() => {
          this.props.navigation.navigate("EventPageDetail");
        }}
      />
    );
  }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(MyBackButton);

//https://reactnavigation.org/docs/en/connecting-navigation-prop.html