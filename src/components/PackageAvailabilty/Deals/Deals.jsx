import React from 'react';
import "../../styles/calendar.scss"

export default function Deals() {
  return <div>
      <div className="deal-wrapper">
        <div className="deal-time">10:20am <span>start time</span></div>
            <div className="deal-card">
                <div className="description">Package description with a longer description that spans over a few lines</div>
                <div class="price-wrapper">
                    <div class="price"><span>AUD</span> $<ins id="price1">1399</ins></div>
                    <div class="button colorPrimary book">BOOK</div>
                </div>
          </div>
      </div>
  </div>;
}
