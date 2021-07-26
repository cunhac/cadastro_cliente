const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome_completo = document.getElementById('nome_completo').value;
  let cpf = document.getElementById('cpf').value;
  let email = document.getElementById('email').value;
  let cep = document.getElementById('cep').value;
  let endereco = document.getElementById('endereco').value;
  let numero = document.getElementById('numero').value;
  let bairro = document.getElementById('bairro').value;
  let estado = document.getElementById('estado').value;
  let telefone = document.getElementById('telefone').value;
  let select = document.getElementById('opcao').value;

  let data = {
    nome_completo,
    cpf,
    email,
    cep,
    endereco,
    bairro,
    numero,
    estado,
    telefone,
    select  
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')


  let carregando = `<p> Cadastrando...</p>`

  let pronto = `<p>Cadastro realizado com sucesso! Enviamos longin e senha para o seu email</p>`

  
  content.innerHTML = carregando

  setTimeout(()=> {
    content.innerHTML = pronto 
  }, 3000)

})

