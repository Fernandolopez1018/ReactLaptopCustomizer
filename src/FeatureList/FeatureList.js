import React from 'react';
import Feature from './Feature'
import {FEATURES} from '../data'

class FeatureList extends React.Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {
          Object.keys(FEATURES).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
              <Feature
              featureHash={featureHash}
              feature={feature}
              FEATURES={FEATURES}
              slugify={this.props.slugify}
              updateFeature={this.props.updateFeature}
              USCurrencyFormat={this.props.USCurrencyFormat}
              state={this.props.state}
              />
            )
          })
        }
      </form>
    )
  }
}

export default FeatureList;