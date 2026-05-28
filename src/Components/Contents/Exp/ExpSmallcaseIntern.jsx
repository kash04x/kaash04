import React from 'react';

function ExpSmallcaseIntern() {
    return (
        <div className="education-section">
            <div className="education-header">
                <h2>Backend Engineer Intern – Smallcase</h2>
                <span className="education-date">08/2025 – 02/2026</span>
            </div>
            <p className='educationPara'>
                My first proper backend gig — and a crash course in what “<span style={{ color: '#725CAD' }}>production</span>” actually means when there are real users on the other side.
            </p>
            <p className='educationPara'>
                Came in writing college-grade code. Left writing code that real people relied on. Somewhere in between I learned what a postmortem is, why feature flags exist, and that “<span style={{ color: '#D1A980' }}>LGTM</span>” is not, in fact, an acceptable PR review.
            </p>
            <p className='educationPara'>
                Got to ship things. Got to break things. Got to fix things other people broke and feel briefly powerful about it. <span style={{ color: '#725CAD' }}>Standard intern arc.</span>
            </p>
            <p className='educationPara'>
                Six months of asking dumb questions, getting good answers, and slowly piecing together how a real product gets built. Turns out it stuck — <span style={{ color: '#D1A980' }}>they kept me on.</span>
            </p>
        </div>
    );
}

export default ExpSmallcaseIntern;
