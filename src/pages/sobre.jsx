import Menu from "./menu"
import Footer from "../interpolacao/footer"
import SobreContent from "../interpolacao/content-sobre"
import "../css/style.css"

function Sobre(){

    const logo = "https://cdn.discordapp.com/attachments/810935222819618857/1113074530685038653/Group_1_3.png"

    return(
        <div>
            <header className="header">
            <img src={logo}/>
                <Menu/>
            </header>
            <SobreContent/>
            <Footer/>
        </div>
    )

}

export default Sobre