import React from 'react';
import PropTypes from 'prop-types';
import '../scss/Select.scss';

function DogSelect(props){
  let wrongGuess = null;
  let dogCompare = null;
  let wordBefore = null;
  if (props.showFail) {
    if (props.userGuess[0] === 'a' || props.userGuess[0] === 'e' || props.userGuess[0] === 'i' || props.userGuess[0] === 'o' || props.userGuess[0] === 'u') {
      wordBefore = 'an';
    } else {
      wordBefore = 'a';
    }
    wrongGuess = <h1>Incorrect! The puppy is not {wordBefore} {props.userGuess}</h1>
  }

  return(
    <div className='background'>
      <div className='Column'>
        <div className='row'>
          <h2 className='textDog'>Select Breed</h2>
          <select id="dogInput">
          {props.dogList.map((dogs, index) =>
            <option key={index} className="dogContent" value={dogs}>{dogs}</option>
          )}
        </select><br />
          <button className='button' type='button' onClick={() => {
            let dogGuess = document.getElementById('dogInput');
            dogCompare = dogGuess.options[dogGuess.selectedIndex].value;
            props.compareGuess(dogCompare);
          }}>Choose</button>
        </div>
        {wrongGuess}
      </div>
    </div>
  )
}


DogSelect.propTypes = {
  dogList: PropTypes.array,
  compareGuess: PropTypes.func,
  showFail: PropTypes.bool,
  userGuess: PropTypes.string,
}

export default DogSelect

// onClick=({props.onChoice(dogChoice)})
