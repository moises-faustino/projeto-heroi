
# Projeto Heroi

Um projeto ReactJS com propósito de exibição e filtragem de uma lista de super-herois consumindo de uma API

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Tech Stacks](#tech-stack)

## Instalação

1. Clone o repositório:
    ```bash
    git clone git@github.com:moises-faustino/projeto-heroi.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd projeto-heroi
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

## Uso

1. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```

2. Abra o navegador e acesse `http://localhost:3000`.

## Tech Stack
* ReactJS
* Axios


> OBS: Encontrei um problema a utilizar a rota do teste relacionado a CORS, como mostrado na print abaixo
![Error Cors](https://i.imgur.com/yKwWfPm.png)

>  Pesquisando identifiquei que esse é um erro por parte do server-side.
>  Para dar sequência no projeto, dei continuação utilizando de um Chrome personalizado sem a limitação de CORS (Deve ser usado apenas desenvolvimento local).
>  Para criar, apenas crie um novo atalho na area de trabalho e cole o seguinte código `"C:\Program Files\Google\Chrome\Application\chrome.exe" --user-data-dir="C:/Chrome dev session" --disable-web-security`
> Ao executar o projeto, lembrar de utilizar esse navegador para conseguir vizualizar ele funcionando.

> Projeto executado no Chrome sem CORS:
![enter image description here](https://i.imgur.com/YhduhU4.png)
