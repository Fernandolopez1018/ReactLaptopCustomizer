import React from 'react';
import FeatureOptionList from './FeatureOptionList'

class Feature extends React.Component {
  render() {
    return (
      <fieldset className="feature" key={this.props.featureHash}>
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        <FeatureOptionList
          features={this.props.FEATURES}
          feature={this.props.feature}
          slugify={this.props.slugify}
          updateFeature={this.props.updateFeature}
          USCurrencyFormat={this.props.USCurrencyFormat}
          state={this.props.state}
        />
      </fieldset>
    )
  }
}

export default Feature;