import React from 'react';

function ProjectBetterLC() {
    return (
        <div className="education-section">
            <div className="education-header">
                <h2>BetterLC</h2>
                <a href="https://chromewebstore.google.com/detail/debbebdlpbnpnnicofdpociejpmokdnm" target='_blank' className='education-date'>Check it out on Chrome Store</a>
            </div>
            <p className='educationPara'>
                Chrome extension for LeetCode addicts. Overlays and injects company tags right on problem pages, assisting you during interview prep. DOM magic makes it all seamless.
            </p>
            <p className='educationPara'>
                Built this to avoid paying just to see company tags. Turns out, plenty of folks were tired of that too. Currently sitting at <span style={{ color: '#D1A980' }}>6,000+ active users</span>!
            </p>
        </div>
    );
}

export default ProjectBetterLC; 