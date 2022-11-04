# ☕ CafApp

O projeto **CafApp** se trata de uma plataforma web que fornece ao usuário a possibilidade de preparar ao seu gosto a bebida que deseja comprar no estabelecimento, de acordo com os diversos ingredientes já fornecidos. Além de interagir com o preparo delas visualmente na tela, será possível adicionar acompanhamentos e exportar um ticket com o ID único da compra, informando os principais detalhes do pedido.

## Tecnologias utilizadas
- React.js
- SQLite
- Express
- ...

## Principais funcionalidades

### Do usuário:
- visualizar tipos de produtos (descrição - foto);
- escolher o produto (tipo e tamanho do recipiente);
- adicionar ingredientes à taça/copo/xícara (quantidade - preço);
- possibilidade de interagir com o preparo das bebidas (botões);
- possibilidade de adicionar mais itens à bandeja;
- adicionar acompanhamentos;
- finalizar “compra”;
- exportar um ticket com o ID do pedido e suas principais informações;

### Funcionalidades futuras:
- histórico de pedidos;
- possibilidade de repetir os pedidos;
- criação do perfil de admin e suas funcionalidades.

## Planejamento das telas:
- **Login**;
- **Tela principal:** botão “Incremente sua bandeja”, definir sessões para ter um saiba mais sobre o estabelecimento; <br/>
(Side-bar a partir daqui com a bandeja)
- **Opções:** Mostrar opções de bebidas e acompanhamentos (dos acompanhamentos já tem a opção de definir quantidade e adicionar a bandeja, além do preço fixo); <br/>
(Caso escolha alguma opção de bebida)
- **Tela de preparo:** Fazer tipo slide (mudando a imagem do copo e as opções / no último mostrar opção de definir quantidade e adicionar a bandeja).
- **Finalizar pedido:** A side-bar vai ter uma opção de finalizar o pedido, que levará para esta tela, onde pode mostrar o ticket para exportação e confirmação da "compra".
