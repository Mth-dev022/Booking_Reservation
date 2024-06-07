<h1 align="center" > Booking Reservation </h1>
<br>

<p align="center">    
    <img width="100%" src="images/booking.png">
</p>

#  📝 Descrição do projeto
<p>
    O aplicativo de reservas de hotel oferece uma plataforma simples e segura para encontrar e reservar acomodações em várias cidades. Com ele, os usuários podem selecionar o destino desejado e as datas da estadia, visualizar uma lista de hotéis disponíveis e comparar comodidades e preços antes de fazer sua escolha.

Além disso, o aplicativo permite que os usuários façam reservas de quartos diretamente, com o custo total calculado automaticamente com base no número de dias e tipo de quarto selecionado. Para os administradores, há um painel de controle onde podem gerenciar usuários, hotéis e quartos, adicionando novas propriedades, definindo preços e monitorando as reservas;

</p>

<br>

<h1 align="center"> Painel Administrador </h1>

<img src="images/admin_home.png">

<p>O painel de administração do aplicativo de reservas de hotel oferece controle total sobre o sistema. Os administradores podem gerenciar usuários, adicionar e editar informações de hotéis e quartos, além de acompanhar as reservas feitas pelos usuários. Essa ferramenta simplifica e agiliza a gestão do aplicativo, garantindo uma operação eficiente e personalizada.</p>

<h1> Como rodar o projeto ? </h1>

Para executar o projeto e ter acesso ao painel de administração, siga os seguintes passos:

Instalação do Node.js e NPM
Certifique-se de ter o Node.js instalado em seu sistema. O NPM é distribuído junto com o Node.js, portanto, ao instalar o Node.js, você automaticamente obtém o NPM. Você pode baixar o Node.js no site oficial do Node.js. Siga as instruções de instalação apropriadas para o seu sistema operacional.

Certifique-se de ter todas as variáveis de ambiente configuradas corretamente.
Execute o servidor.
Utilize Postman, Insomnia ou ferramenta similar para fazer uma requisição POST para a rota ```
  'http://localhost:PORT/api/auth/register'```
 
No corpo da requisição, adicione os campos ```username, email e password```
Após criar o usuário, acesse o MongoDB e defina o campo isAdmin como true para ter acesso ao painel administrativo.


Variáveis de Ambiente
Certifique-se de criar duas variáveis de ambiente:

STRING DE CONEXÃO COM O MONGODB: Substitua esta variável pelo endereço de conexão com o seu banco de dados MongoDB.

Token JWT: Substitua esta variável pelo seu token JWT para autenticação.

# 🚀 Tecnologias e bibliotecas

Esse projeto está sendo desenvolvido com as seguintes tecnologias:

Front-end
- React.JS
- Axios
- Sass
- React-router-dom
- @mui/icons-material
- @mui/x-data-grid
- Recharts
- react-circular-progressbar

Back-end
- NodeJS
- Express
- Nodemon
- Bcrypt
- Cookie-parser
- Json Web Token
- mongoose

Banco de dados: <br>
-MongoDB
