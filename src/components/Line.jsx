import React from 'react';

const Line = ({ x1, y1, x2, y2 }) => {
    const dx = x2 - x1;
    const dy = y2 - y1;

    const length = Math.sqrt(dx ** 2 + dy ** 2);

    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    const positionStyle = {
        position: 'absolute',
        left: `${x1}px`,
        top: `${y1}px`,
        width: `${length}px`,
        transformOrigin: '0 0', 
        transform: `rotate(${angle}deg)`,
        borderBottom: '1px solid black',
        zIndex: 0
    };

    return <div style={positionStyle}></div>;
};

export default Line;

