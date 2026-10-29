# Dias 25 — Landing page

React + TypeScript + Vite + Tailwind v4 + Framer Motion + GSAP.

    npm install
    npm run dev      # desenvolvimento
    npm run build    # produção (dist/)

## O que configurar
- Copie `.env.example` para `.env` e preencha `VITE_WHATSAPP_NUMBER` (ex.: 5511999999999), `VITE_BOOKING_URL`, `VITE_ADDRESS`, `VITE_MAPS_URL`.
- `src/config/site.ts`: horários, links e mensagem do WhatsApp.
- `src/data/photos.ts`: **todas as fotos são placeholders do Unsplash**. Troque por fotos reais (coloque em `public/fotos/` e use `{ src: '/fotos/x.jpg', alt: '...' }`). Em `npm run dev` elas aparecem com a etiqueta "placeholder".
- `src/data/services.ts`: serviços; preencha `price` só com valores reais.
- `src/data/gallery.ts`: galeria e vídeos (`videos` vazio = player oculto).
