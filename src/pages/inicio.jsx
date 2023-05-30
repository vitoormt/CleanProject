import "../css/style.css"
import Menu from "./menu"
import UncontrolledExample from "../interpolacao/Slide"
import Produtos from "../interpolacao/produtos-inicio"
import Footer from "../interpolacao/footer"


function Inicio(){

    const logo = "https://cdn.discordapp.com/attachments/810935222819618857/1113074530685038653/Group_1_3.png"

    return(
        <div>
            <header className="header">
                <img src={logo}/>
                <Menu/>
            </header>
            <UncontrolledExample/>
            <Produtos/>
            <Footer/>
        </div>
    )

}

export default Inicio;