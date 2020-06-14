<p align="center">
  <img src="https://antenas.s3.amazonaws.com/amigo-da-estrada.svg" alt="Logo do Amigo da Estrada" />
</p>

<h1 align="center">Amigo da Estrada</h1>

<p align="center">
    <a href="#equipe">Equipe</a> •
    <a href="#o-que-é-o-amigo-da-estrada">O que é o Amigo da Estrada?</a> •
    <a href="#como-configurar-o-ambiente-do-amigo-da-estrada">Configurando o ambiente</a>
</p>

---

## Equipe:
- Ariana Ferreira _UX/UI Designer_
- [Fábio Romeiro](https://github.com/FabioRomeiro) _Desenvolvedor Front-end_
- Giana Martins _Business_
- Nelson Ferreira _Business_
- [Rogério Santos](https://github.com/piurass) _Desenvolvedor Back-end_


## O que é o Amigo da Estrada?

O Amigo da Estrada é uma aplicação feita durante o [Hackathon CCR](http://grupoccr.com.br/hackathonccr/), que teve como objetivo gerar ideias voltadas para a rotina dos caminhoneiros, encontrando soluções para melhorar a qualidade de vida nas estradas, principalmente quanto à saúde física e mental desses profissionais.

Nosso grupo abraçou a causa da saúde mental dos caminhoneiros partindo do problema de que os motoristas passam a maior parte de sua jornada se sentindo sozinhos.

Baseado em pesquisas feitas e dados analisados de sevidores publicos, o grupo concluíu como sendo a solução um rádio amador digital, onde o usuário poderá, por comando de voz, ter acesso a um bate papo, consultas com profissionais de saúde online e, inspirado pelo medo constante de assalto durante o trabalho, um botão de pânico.


## Como configurar ambiente do Amigo da Estrada?

Esta é a parte do Front-end do projeto que foi dividido em dois grandes módulos módulos:
- [AmigoDaEstradaClient - Front end](https://github.com/AmigoDaEstrada/AmigoDaEstradaClient)
- [AmigoDaEstradaService - API](https://github.com/AmigoDaEstrada/backend)


### Pré-requisitos para configurar o Front-end:
- [NodeJs](https://nodejs.org/pt-br/download/)

### Passo a passo
1. Baixe o projeto clicando no botão superior direito da pagina do Github "Clone or Download" > "Download ZIP"
    
    1.1. Ou faça utilizando o Git. Abra o seu terminal
    
    1.2. Navegue, pelo terminal, até onde deseja que o projeto fique localizado e rode
    ```bash
        $ git clone git@github.com:AmigoDaEstrada/backend.git
    ```

2. Entre no diretório do projeto, e rode o comando:
    ```bash
        $ npm install
    ```

3. Quando o processo de instalação de dependencias finalizar, rode o comando:
    ```bash
        $ npm run serve
    ```

4. Com isso a aplicação ja deve estar rodando em http://localhost:8080


### **LEMBRE-SE**

O projeto possui uma API que alimenta o front-end, para ter a experiência completa, [acesse o repositório da API](https://github.com/AmigoDaEstrada/backend), siga os passos de instalação, e rode no seu local juntamente com esta aplicação.

<p align="center">
  <a href="https://shawee.io/" target="_blank">
    <img src="http://hackathontotalvoice.shawee.io/assets/img/logo-shawee.png" alt="Logo da Shawee" width="150" />
  </a>
  <a href="http://www.grupoccr.com.br/" target="_blank">
    <img src="https://interitsolutions.com.br/wp-content/uploads/2019/02/ccr.png" alt="Logo da CCR" width="150" />
  </a>
</p>