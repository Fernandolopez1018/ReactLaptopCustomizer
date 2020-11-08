import React from 'react';

class FeatureSummary extends React.Component {
  render() {
    return (
      Object.keys(this.props.state.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.props.state.selected[feature];
        return (
          <Selection 
          feature={feature}
          featureHash={featureHash}
          USCurrencyFormat={this.props.USCurrencyFormat}
          selectedOption={selectedOption}
          />
        )
      })
    )
  }
}

export default FeatureSummary