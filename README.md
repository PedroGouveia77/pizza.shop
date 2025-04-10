<div align="center">
  <img src="https://logospng.org/download/tailwind-css/tailwind-css-512.png" height="300" alt="Tailwind CSS Logo" />
  <h1>pizza.shop</h1>
  <p>Aplicação moderna para gestão de pizzarias, com autenticação, painel administrativo e gerenciamento de perfil.</p>
</div>

---

## 📋 Sobre o Projeto

**pizza.shop** é uma aplicação web moderna desenvolvida com React + TypeScript, focada em facilitar a administração de pizzarias. Com um painel completo, permite o gerenciamento de dados do restaurante, autenticação de usuários e controle de perfis.
Foi criado com auxilio da Rocketseat 🚀. 

---

## 🚀 Tecnologias Utilizadas

- **React + TypeScript** — Estrutura base da aplicação
- **Vite** — Bundler moderno e rápido
- **Tailwind CSS** — Estilização com classes utilitárias
- **shadcn/ui** — Componentes prontos e acessíveis
- **React Query** — Gerenciamento de estado e cache da API
- **Axios** — Cliente HTTP com interceptors configurados
- **React Hook Form + Zod** — Formulários com validação tipada
- **Context API** — Tema, autenticação e estado global
- **Sonner** — Toasts e notificações
- **ESLint** — Padrões de código e boas práticas

---

## 🧠 Funcionalidades

- [x] Login e autenticação via JWT
- [x] Rotas protegidas (401 Unauthorized)
- [x] Gerenciamento do restaurante via painel
- [x] Edição de perfil do usuário
- [x] Validação de formulários com feedback
- [x] Toasts de sucesso e erro
- [x] Otimistic updates com React Query
- [x] Tipagem das respostas da API
- [x] Interceptors no Axios para token automático

---

## 🌐 Endpoints da API

- `POST /authenticate` — Autenticação inicial
- `POST /sign-out` — Logout
- `GET /me` — Dados do perfil autenticado
- `PUT /profile` — Atualização do perfil
- `GET /managed-restaurant` — Dados do restaurante
- `GET /orders` — Lista de pedidos
- `GET /orders/:orderId` — Detalhes de um pedido específico
- `POST /restaurants` — Registro de novo restaurante

---

## 🛠️ Instalação e Execução

### Com Docker (Recomendado)

```bash
# Clone o repositório do Docker
git clone https://github.com/rocketseat-education/pizzashop-api#

# Acesse a pasta
cd pizzashop-api

# Abra o arquivo '.env.local.example' e copie o que tem lá dentro

# crie um arquivo .env.local

# No seu arquivo .env.local, insira um . dentro da aspas do RESEND_API_KEY
RESEND_API_KEY="."

# Inicie o Docker
docker ps

# Instale o Bun
bun i

# Inicialize a migração
bun migrate

# Inicialize o seed
bun seed

# Utilize o Bun
bun dev

# A aplicação fica disponivel em
http://localhost:3000
```

### Para utilizar a integração

```bash
# Clone o repositório
git clone https://github.com/PedroGouveia77/pizza.shop.git

# Acesse a pasta
cd pizza.shop

# Instale as dependências
pnpm install

# Execute o projeto
pnpm dev
```

---
---

## 🧪 Scripts Úteis

```bash
pnpm dev — Inicia o servidor de desenvolvimento
pnpm build — Gera a versão de produção
pnpm lint — Executa o ESLint
```

---

## 💡 Observações

- Requer backend com autenticação via JWT
- Axios está configurado com interceptors para envio automático do token
- O projeto utiliza tipagem das respostas da API para maior segurança

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

<div align="center"> 
  Feito com 💙 por Pedro Henrique Gouveia de Miranda Couto 
  
  [GitHub](https://github.com/PedroGouveia77) | [LinkedIn](https://www.linkedin.com/in/pedrohenriquegouveia)
</div>
