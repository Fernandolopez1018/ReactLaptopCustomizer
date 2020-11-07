import React from 'react';

class Features extends React.Component {
  static defaultProps = {
    features: {},
    state: {},
    slugify: null,
    USCurrencyFormat: null
  }

  render() {
    return (
      Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map(item => {
          const itemHash = this.props.slugify(JSON.stringify(item));
          return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={this.props.slugify(feature)}
                checked={item.name === this.props.state.selected[feature].name}
                onChange={e => this.props.updateFeature(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({this.props.USCurrencyFormat.format(item.cost)})
              </label>
            </div>
          );
        });
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        )
      })
    )
  }
}

export default Features;