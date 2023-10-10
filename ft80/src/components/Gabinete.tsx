import  "../styles/gabinete.css";
import { Clarificador } from "./Clarificador";
import { Dial } from "./Dial";
import { Dlock } from "./Dlock";

export const Gabinete = () => {
  return (
    <>
    
    <div className="frente">
        <div className="displayFrame"></div>
        <div className="logo">
            <span className="logo-yaesu">YAESU</span>
            <span className="logo-trans">HF TRANSCEIVER</span>
            <span className="logo-ft">FT-80C</span>
        </div>
        <div className="parlante">
            <div className="parlante-rejilla"></div>
            <div className="auriculares-inner">
                <div className="auriculares-out">
                    <div className="auriculares-in"></div>
                </div>
            </div>
            <div className="parlante-footer ">
                <span className="phones">
                    PHONES
                </span>
                <span className="cat">
                   <strong>C A T</strong> SYSTEM
                </span>
            </div>
        </div>
        <div className="tapasCont">
            <table>
                <tbody>
                    <tr>
                        <td className="tapitas-mode"></td>
                        <td className="tapitas"></td>
                        <td className="tapitas"></td>
                    </tr>
                    <tr>
                        <td className="tapitas"></td>
                        <td className="tapitas"></td>
                        <td className="tapitas"></td>
                    </tr>
                </tbody>
            </table>
            <table className="separador">
                <tbody>
                    <tr>
                        <td className="tapitas-cuadrada"></td>
                    </tr>
                    <tr>
                        <td className="tapitas-cuadrada"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="mic">

        </div>
        < Clarificador />
        < Dlock />
        < Dial />

    </div>
    
    </>
  )
}
