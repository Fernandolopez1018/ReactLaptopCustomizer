import React from 'react';

class Total extends React.Component {
  render() {
    return (
      this.props.USCurrencyFormat.format(Object.keys(this.props.state.selected)
      .reduce((acc, curr) => acc + this.props.state.selected[curr].cost, 0))
    )
  }
}

export default Total;