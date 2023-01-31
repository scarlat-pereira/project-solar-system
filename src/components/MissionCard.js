import PropTypes from 'prop-types';
import React from 'react';
import './MissionCardStyle.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission-card" data-testid="mission-card">
        <p data-testid="mission-name" className="um">{name}</p>
        <p data-testid="mission-year" className="dois">{year}</p>
        <p data-testid="mission-country" className="tres">{country}</p>
        <p data-testid="mission-destination" className="quatro">{destination}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
}.isRequired;

export default MissionCard;
