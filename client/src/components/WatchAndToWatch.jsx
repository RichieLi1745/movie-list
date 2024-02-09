import React, { useState } from 'react';

const WatchAndToWatch = (props) => {
  const [watch, setWatch] = useState('Watched');

  function WatchedList (event) {
    setWatch(<strong>Watched</strong>);
    props.handleWatchAndToWatch(watch);
    setToWatch('To Watch');
  }
  function ToWatchList (event) {
    setWatch(<strong>To Watch</strong>);
    props.handleWatchAndToWatch(toWatch);
    setWatch('Watched');
  }
  return (
    <div className="WatchAndToWatch">

      <button type='tab' className={watch === 'Watched' ? 'active' : ''}>Watched</button>
      <button type='tab' className={watch === 'To Watch' ? 'active' : ''}>To Watch</button>


      <div className="outlet">
        {/*render */}
      </div>
    </div>
  )
}
export default WatchAndToWatch;