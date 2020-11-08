import React from 'react';
import Total from './Total'
import FeatureSummary from './FeatureSummary'


class Cart extends React.Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <FeatureSummary 
          state={this.props.state}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
        <Total
          state={this.props.state}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
      </section>
    )
  }
}

export default Cart;