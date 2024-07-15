## DevMotors

Este é um projeto layout de um site de manutenção de automóveis utilizando o [Next.js](https://nextjs.org/).

## 👨🏻‍💻 Começando...

Primeiro, execute os seguintes comandos no cmd:

```bash
npm install
# em seguida
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o projeto.

---

## 💻/📱 Layouts do projeto

O projeto contem responsividade em todas as páginas.

- Home page (Home, serviços e contatos)

<div class="div-web">
  &nbsp;&nbsp;<img width="509" height="293" src="./github/images/home-page.png" />&nbsp;&nbsp;
  &nbsp;&nbsp;<img width="509" height="293" src="./github/images/sevicos-e-contatos.png" />&nbsp;&nbsp;
</div>

##
- Home page mobile

<div class="div-mobile">
  &nbsp;&nbsp;<img width="129" height="280" src="./github/images/Home-page-mobile.png" />&nbsp;&nbsp;
  &nbsp;&nbsp;<img width="129" height="280" src="./github/images/Home-page-menu-mobile.png" />&nbsp;&nbsp;
  &nbsp;&nbsp;<img width="129" height="280" src="./github/images/servicos-mobile.png" />&nbsp;&nbsp;
  &nbsp;&nbsp;<img width="129" height="280" src="./github/images/contatos-mobile.png" />&nbsp;&nbsp;
</div>

##
- Página de serviço (Troca de óleo)
<div class="div-servicos">
  &nbsp;&nbsp;<img width="509" height="293" src="./github/images/troca-de-oleo-web.png" />&nbsp;&nbsp;  
  &nbsp;&nbsp;<img width="129" height="280" src="./github/images/troca-de-oleo-mobile.png" />&nbsp;&nbsp;
</div>

<style>
  .div-mobile{
    display: inline-flex;
    width: 100%;    
    justify-content: space-around;
    align-items: center;   
  }
</style>

<style>
  .div-web{
    display: flex;
    width: 100%;    
    gap: 5px;
    justify-content: center;
    align-items: center;      
  }
</style>

<style>
.div-servicos{
  display: flex;
  width:100%;
  gap:10px;
  justify-content: center;
  align-items: center;
}
</style>
