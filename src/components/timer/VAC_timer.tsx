import React from 'react';

const VACTimer = ({ isDark, timeToS, onClick }: { isDark: boolean, timeToS: string, onClick: () => void }) => {
    
    return (
        <div>
            <button onClick={() => {
                onClick();
            }}>
                등록
            </button>
            <p>{timeToS}</p>
        </div>
    );
};

export default React.memo(VACTimer);