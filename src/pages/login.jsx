import Menu from "./menu"
import Log from "../interpolacao/login"
import Footer from "../interpolacao/footer"
import "../css/style.css"

function Login(){

    const logo = "https://cdn.discordapp.com/attachments/810935222819618857/1113074530685038653/Group_1_3.png"

    return(
        <div>
            <header className="header">
            <img src={logo}/>
                <Menu/>
            </header>
            <Log/>
            <Footer/>
        </div>
        
    )

}

export default Login;