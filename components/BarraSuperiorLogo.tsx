import React from "react";
import Head from "next/head";

const BarraSuperiorLogo = () => {
    return (
        <div className="BarraSuperiorLogo">
            <Head>
                <title>Read | Plataforma de Lecturas</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
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