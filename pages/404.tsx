import React from "react";
import Link from "next/link";

import BarraSuperiorLogo from "../components/BarraSuperiorLogo";

const PaginaError = () => {
    return (
        <>
            <BarraSuperiorLogo />
            <div className="PaginaError">
                <h2>Lo sentimos</h2>
                <p>La página que está buscando no existe.</p>
                <Link href="/">Regresar a la página principal</Link>
                <style jsx>{`
                    .PaginaError {
                        max-width: 768px;
                        margin: 0 auto;
                        text-align: center;
                    }
                    .PaginaError h2 {
                        margin: 12px 0;
                    }
                    .PaginaError p {
                        margin: 12px 0 24px 0;
                    }
                `}</style>
            </div>
        </>
    )
}

export default PaginaError;