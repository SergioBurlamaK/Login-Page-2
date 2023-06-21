export function login() {
  return (
    <div>
      <h2>Faça seu login</h2>
      <label>
        Email <input name="myEmail"/>
      </label>
      <label>
        Senha <input name="myPassword"/>
      </label>
      <a href="/*">Esqueci minha senha</a>
      <button>Entrar</button>
      <a href="/*">Ainda não tenho uma conta</a>
    </div>
  );
}