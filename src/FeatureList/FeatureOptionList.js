import React from 'react';
import FeatureOption from './FeatureOption'

class FeatureOptionList extends React.Component {
  render() {
    return (
      this.props.features[this.props.feature].map(item => {
        const itemHash = this.props.slugify(JSON.stringify(item));
        return (
          <FeatureOption 
          updateFeature={this.props.updateFeature}
          slugify={this.props.slugify}
          item={item}
          itemHash={itemHash}
          feature={this.props.feature}
          state={this.props.state}
          USCurrencyFormat={this.props.USCurrencyFormat}
          />
        )
      })
    )
  }
}

export default FeatureOptionList;