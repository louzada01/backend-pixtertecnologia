# Teste de desenvolvimento Back End Node.js

[![N|Solid](https://www.pixtertechnologies.com/wp-content/uploads/2020/01/logo-dark.png)](http://pixter.com.br)

✅ [Link Oficial do desafio.](https://bitbucket.org/pixtertecnologia/backend/src/master/)

## A proposta do teste é:

## 🏁 Criar uma API que através de uma latitude e longitude buscar

### 🕵🏻‍♂️ Dados de endereço:

```
https://maps.googleapis.com/maps/api/geocode/json?latlng=-23.5655625,-46.6472389&sensor=false&key=AIzaSyA6TfU84r6wT2gu1NYAOCN7JkO342K21So
```

### 🕵🏻‍♂️ Postos de combustíveis abertos ao redor

```
https://maps.googleapis.com/maps/api/place/search/json?location=-23.5655625,-46.6472389&radius=10000&type=gas_station&key=AIzaSyA6TfU84r6wT2gu1NYAOCN7JkO342K21So
```

## 🔧 Rodando o projeto

### 💫 Realize o clone desse projeto

```
git@github.com:louzada01/backend-pixtertecnologia.git
```

### 📦 Instale as dependências

```
yarn or npm i
```

### 🎉 Execute o projeto

```
yarn dev
```

### 🚦 Request:

```
  POST - http://localhost:5000/address

  BODY REQUEST:

  {
      "lat": "-23.5655625",
      "lng": "-46.6472389"
  }
```

### ✨ Response:

```
  {
      "lat": "-23.5655625",
      "lng": "-46.6472389"
      "endereco": {
        "estado": "SP",
        "cidade": "São Paulo",
        "bairro": "Bela Vista",
        "logradouro": "Avenida Paulista",
        "numero": "1374",
        "cep": "01310100" //se existir
      },
      "postos": [
        {
          "lat": "-23.5655625",
          "lng": "-46.6472389",
          "nome": "AUTO POSTO PAULISTA",
          "endereco": "Avenida Paulista, 2537"
        },
        {
          "lat": "-23.5655625",
          "lng": "-46.6472389",
          "nome": "AUTO POSTO PAULISTA",
          "endereco": "Avenida Paulista, 2537"
        },
        ...
      ]
  }
```

### 📝 Requisitos:

- Desenvolver em Javascript, nativo ou utilizando qualquer framework da linguagem
- Promise
- Promise All
- Filter
- Map
- Object.assign()

### 🚨 Importante não utilizar bibliotecas
