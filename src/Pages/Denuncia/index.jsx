import Footer from "../../Components/Footer"
import Header from "../../Components/Header"
import './denuncia.css'

function Denuncia (){

    return(
        <><Header />

        <h1>Fazer Denuncia</h1>
        <div className="btn-denuncia">
            <button>Cadastrar</button>
            <button>Editar</button>
            <button>Excluir</button>
        </div>
        <div className="central">
            Denuncia feitas

        </div>

        <Footer/></>

    )


}

export default Denuncia