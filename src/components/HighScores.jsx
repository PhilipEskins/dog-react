import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../scss/HighScores.scss';

function HighScores(props) {
  return(
    <div className='wrapper'>
      <div className='highScoreBorder'>
        <h2 className='title'>Current Top Scores:</h2>

        {props.highScores.slice(0,10).map(function(entry, index){
          return <div className='topNames'><span key={index} className='name'>{entry.name}</span><span className='scores'>{entry.savedScore}</span></div>
        })}


      </div>
    </div>
  )
};

HighScores.propTypes = {
  highScores: PropTypes.array
}

const mapStateToProps = state => {
  return {
    highScores: state.playerInfo.highScores
  }
}

export default connect(mapStateToProps)(HighScores);
