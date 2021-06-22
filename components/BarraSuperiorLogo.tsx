import React from "react";

const BarraSuperiorLogo = () => {
    return (
        <div className="BarraSuperiorLogo">
            <h1>Read</h1>
            <style jsx>{`
                .BarraSuperiorLogo {
                    background-color: lightblue;
                    height: 56px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }
                .BarraSuperiorLogo h1 {
                    font-size: 32px;
                }
            `}</style>
        </div>
    )
}

export default BarraSuperiorLogo;