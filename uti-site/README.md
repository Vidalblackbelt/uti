# U.ti — Marketplace de TI (MVP)

Stack: Next.js 14 (App Router) + TypeScript + Tailwind + Prisma + NextAuth (Credenciais) + Stripe Subscriptions.

## Como rodar
1) `npm i`
2) Copie `.env.example` para `.env` e preencha:
   - `AUTH_SECRET` (use `openssl rand -base64 32`)
   - `STRIPE_SECRET_KEY`, `STRIPE_PRICE_*` (do seu dashboard)
3) `npx prisma migrate dev --name init`
4) `npm run dev` e abra http://localhost:3000

## Funções prontas
- Cadastro e login por credenciais
- Perfis com papéis: TECHNICIAN, COMPANY, INSTRUCTOR, ADMIN
- Dashboard protegido
- Tabela de assinaturas + Checkout do Stripe (IDs de preço no .env)
- Tailwind com estilo base e componentes utilitários

> Observação: Webhook do Stripe está como placeholder. Configure no painel Stripe para atualizar assinaturas no banco.
