import React from 'react';

function ExpSmallcaseSDE() {
    return (
        <div className="education-section">
            <div className="education-header">
                <h2>Software Development Engineer 1 – Smallcase</h2>
                <span className="education-date">03/2026 – Present</span>
            </div>
            <p className='educationPara'>
                Same desk, slightly more responsibility. Internship graduated me into full-time without changing the WiFi password — which felt like <span style={{ color: '#D1A980' }}>a vibe</span>.
            </p>
            <p className='educationPara'>
                Days are a mix of: writing code, reviewing code, untangling that one prod issue someone politely Slack’d about, and refactoring something nobody else wanted to touch. <span style={{ color: '#D1A980' }}>The good kind of busy.</span>
            </p>
            <p className='educationPara'>
                On-call rotations mean I now have strong opinions about alert thresholds, retry budgets, and the exact moment a graph stops being a “<span style={{ color: '#725CAD' }}>small spike</span>” and becomes a “<span style={{ color: '#725CAD' }}>situation</span>”.
            </p>
            <p className='educationPara'>
                Shipping things that move actual money teaches you a particular kind of humility. Bugs aren’t just bugs — they’re someone’s portfolio looking weird at 2 AM. So we measure twice, deploy carefully, and pretend we never feared the rollback button.
            </p>
        </div>
    );
}

export default ExpSmallcaseSDE;
