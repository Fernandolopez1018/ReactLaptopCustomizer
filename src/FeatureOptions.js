import React from 'react';

class FeatureOptions extends React.Component {
  render() {
    return (
      this.props.features[this.props.feature].map(item => {
        const itemHash = this.props.slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={this.props.slugify(this.props.feature)}
              checked={item.name === this.props.state.selected[this.props.feature].name}
              onChange={e => this.props.updateFeature(this.props.feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({this.props.USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        )
      })
    )
  }
}

export default FeatureOptions;