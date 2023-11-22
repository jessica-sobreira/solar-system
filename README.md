# Solar System

![screencapture-solar-system-azure-beta-vercel-app-2023-11-22-10_54_19](https://github.com/jessica-sobreira/solar-system/assets/117686537/f829fa04-623e-4849-8f20-e94483b408e2)

Este é um projeto React que utiliza a API [le-systeme-solaire](https://api.le-systeme-solaire.net/) para explorar informações sobre planetas do sistema solar.

## Componente Home

O componente `Home` é a página principal do aplicativo. Aqui estão os principais pontos:

### Bibliotecas Utilizadas
- `axios`: Utilizado para fazer requisições HTTP.

### Estados e Hooks
- `planets`: Armazena a lista de planetas obtida da API.
- `loading`: Indica se os dados estão sendo carregados.
- `search`: Armazena o termo de pesquisa para filtrar planetas.
- `currentPage`: Mantém o número da página atual.
- `itemsPerPage`: Define a quantidade de itens por página.

### Efeitos e Requisições
- Usa o hook `useEffect` para carregar a lista de planetas ao montar o componente.
- Utiliza a biblioteca `axios` para fazer uma requisição à API.
- Atualiza o estado `planets` e `loading` com base na resposta da API.

### Filtragem e Paginação
- Utiliza o hook `useMemo` para filtrar planetas com base na pesquisa.
- Usa `useEffect` para resetar a página atual quando o termo de pesquisa muda.
- Calcula índices para mostrar apenas os itens necessários por página.
- Implementa a função `paginate` para permitir a navegação entre páginas.

### Renderização
- Renderiza o componente `Header` com título, subtítulo, barra de pesquisa e indicador de carregamento.
- Exibe os planetas em cartões formatados com informações detalhadas.
- Apresenta a barra de paginação ao final da lista de planetas.
- Adiciona um rodapé com informações de autoria e ano de desenvolvimento.

  ### Desenvolvedora
  - **Jéssica Sobreira**: pessoa responsável por desenvolver o projeto.

------
*Este código representa uma aplicação React para explorar e aprender sobre planetas do sistema solar.*
