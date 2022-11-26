# ☕ CafApp

**Dupla:** Jucyelle Barros e Racklyn Sotero.

O projeto **CafApp** se trata de uma plataforma web que fornece ao usuário a possibilidade de preparar ao seu gosto a bebida que deseja comprar no estabelecimento (café, chá, chocolate quente, ...) de acordo com os diversos ingredientes já fornecidos. Além de interagir com cada passo do preparo das bebidas visualmente na tela (fervendo água, adicionando os ingredientes, misturando-os, etc...), será possível adicionar acompanhamentos à bandeja da compra (biscoitos, chocolates, etc...) e exportar um ticket com o ID único da compra, informando os principais detalhes do pedido.

**[Esboço do sistema no Figma.](https://www.figma.com/file/cbFD16ShewzOeEJGmOKnK8/cafApp?node-id=0%3A1&t=lpCMkFILkIbergkT-1)**

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
- cadastro na plataforma;
- histórico de pedidos;
- possibilidade de repetir os pedidos;
- criação do perfil de admin e suas funcionalidades.

Vizualize a lista mais completa com as funcionalides **[clicando aqui](https://www.notion.so/CafApp-Levantamento-de-Requisitos-Funcionalidades-cec387ed996043ee9549f4599d2590de)**.

## Planejamento das telas
- **Login**;
- **Tela principal:** botão “Incremente sua bandeja”, definir sessões para ter um saiba mais sobre o estabelecimento; <br/>
(Side-bar a partir daqui com a bandeja)
- **Opções:** Mostrar opções de bebidas e acompanhamentos (dos acompanhamentos já tem a opção de definir quantidade e adicionar a bandeja, além do preço fixo); <br/>
(Caso escolha alguma opção de bebida)
- **Tela de preparo:** Fazer tipo slide (mudando a imagem do copo e as opções / no último mostrar opção de definir quantidade e adicionar a bandeja).
- **Finalizar pedido:** A side-bar vai ter uma opção de finalizar o pedido, que levará para esta tela, onde pode mostrar o ticket para exportação e confirmação da "compra".

## Padrões de projeto
A princípio, planejamos utilizar os seguintes padrões de projeto:
- Template Method;
- Strategy;
- Singleton;
- (a definir...)
