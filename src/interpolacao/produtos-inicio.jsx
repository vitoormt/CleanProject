import "../css/style.css"

function Produtos() {

    const urlImg3 = "https://cdn.discordapp.com/attachments/810935222819618857/1113060122420314182/embalagens-dos-produtos-de-limpeza.png"
    const urlImg4 = "https://cdn.discordapp.com/attachments/810935222819618857/1113067371335262268/limpeza-de-casa1872-cp.jpg"
    const urlImg5 = "https://cdn.discordapp.com/attachments/810935222819618857/1113061809709125723/500-ml-1.png"


return (
  <div className="section-produto">
    <div className="produto">
        <img className="img-produto" src={urlImg3}/>
        <span className="preco-produto">R$ 67,90</span>
        <h2 className="title-produto">Kit de limpeza</h2>
        <a className="btn-produto" href="">Comprar Agora</a>
    </div>
    <div className="produto">
        <img className="img-produto" src={urlImg4}/>
        <span className="preco-produto">R$ 25,99</span>
        <h2 className="title-produto">Ipê - Cloro Gel</h2>
        <a className="btn-produto" href="">Comprar Agora</a>
    </div>
    <div className="produto">
        <img className="img-produto" src={urlImg5}/>
        <span className="preco-produto">R$ 17,99</span>
        <h2 className="title-produto">Limpador casa e perfume</h2>
        <a className="btn-produto" href="">Comprar Agora</a>
    </div>
    </div>
)}

export default Produtos;