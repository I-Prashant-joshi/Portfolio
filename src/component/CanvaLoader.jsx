import React from 'react';
import { Html, useProgress } from '@react-three/drei';

function CanvaLoader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <div style={{ color: 'white' }}>{progress.toFixed(2)}% loaded</div>
        </Html>
    );
}

export default CanvaLoader;