import React from 'react';

function ExpFenxify() {
    return (
        <div className="education-section">
            <div className="education-header">
                <h2>SDE Intern – Fenxify</h2>
                <span className="education-date">06/2024 – 07/2024</span>
            </div>
            <p className='educationPara'>
                <span style={{ color: '#D1A980' }}>Shipped APIs that let vendors automate inventory updates</span> — less manual fiddling, more time for actual work. Win-win.
            </p>
            <p className='educationPara'>
                <span style={{ color: '#D1A980' }}>Integrated webhook support</span> so vendors could pick up changes in real time instead of refreshing a page like it's 2008.
            </p>
            <p className='educationPara'>
                <span style={{ color: '#D1A980' }}>Streamlined the deployment workflow</span> using GitHub Actions and added health checks, so we'd find out things were broken before users did. <span style={{ color: '#725CAD' }}>Mostly.</span>
            </p>
            <p className='educationPara'>
                Two months, plenty of PRs, only one or two production scares. Calling that a clean sheet (with footnotes).
            </p>
        </div>
    );
}

export default ExpFenxify;
