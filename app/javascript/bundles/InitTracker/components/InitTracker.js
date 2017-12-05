import PropTypes from 'prop-types';
import React from 'react';
import ErrorBlock from './ErrorBlock';
import TableLine from './TableLine';
import TableBlock from './TableBlock';
import RaceSelect from './RaceSelect';

export default class PBCalc extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        errors: [],
        stats: {
          strength: {text: "Strength", name: 10, value: 0},
          constitution: {text: "Constitution", name: 10, value: 0},
          dexterity: {text: "Dexterity", name: 10, value: 0},
          intelligence: {text: "Intelligence", name: 10, value: 0},
          wisdom: {text: "Wisdom", name: 10, value: 0},
          charisma: {text: "Charisma", name: 10, value: 0}
        },
        selectedRace: this.props.raceStats[0],
        selectedStat: '',
        pointTotal: 0
      }
  }

  render() {
    return (
      <form>
      <h3>Calculate Stats</h3>
        <ErrorBlock
          errors={this.state.errors}
        />
        <RaceSelect
          selectedRace={this.state.selectedRace}
          raceSelect={this.raceSelect}
          handleRaceChange={this.handleRaceChange}
          raceStats={this.props.raceStats}
          selectedStat={this.state.selectedStat}
        />
        <br/>
        <TableBlock
          stats={this.state.stats}
          handleStatChange={this.handleStatChange}
          selectedRace={this.state.selectedRace}
          statValues={this.props.statValues}
          pointTotal={this.state.pointTotal}
        />
      </form>
    );
  }
}
