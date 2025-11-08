
import React from 'react'
import HeroComp from './HeroComp';
import ErrorBoundaryComp from './ErrorBoundaryComp';

function ErrorBoundaryDemos() {
    return (
        <div>
            <h2>Error Boundary Demos</h2>
            <ErrorBoundaryComp>
                <HeroComp heroName="Super Man" />
            </ErrorBoundaryComp>
            <ErrorBoundaryComp>
                <HeroComp heroName="Spider Man" />
            </ErrorBoundaryComp>
            <ErrorBoundaryComp>
                <HeroComp heroName="Joker" />
            </ErrorBoundaryComp>
        </div>
    )
}

export default ErrorBoundaryDemos;
