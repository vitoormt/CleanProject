import "../css/style.css"

function Log() {


return (
  <div className="section-login">
    <div class = "box">
      <div class ="inbox">
        <h1>Faça seu Login</h1>
        <form>
          <input type="email" id="email" name="email" placeholder="E-mail"></input>
          <input type="password" id="senha" name="senha" placeholder="Senha"></input>
          <button tittle="solid" type="submit" class="btn-login" >Enviar</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Log;