# ビルド環境
FROM node:krypton-trixie@sha256:e4ceb04a1f1dd4823a1ab6ef8d2182c09d6299b507c70f20bd0eb9921a78354d AS builder

WORKDIR /app

COPY package.json pnpm-*.yaml ./
RUN apt-get update && apt-get install -y libpq-dev python3 g++ make
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

ENV PORT=3000

COPY . .

RUN pnpm run build


# 実行環境
FROM gcr.io/distroless/nodejs24-debian13:nonroot@sha256:774b7d020b24214835769e24c3544835526cd0288f0b094eae48e8b2c2429a79 AS runner

WORKDIR /app

ENV PORT=3000

COPY --from=builder --chown=nonroot:nonroot /app/.next/standalone ./
COPY --from=builder --chown=nonroot:nonroot /app/.next/static ./.next/static
COPY --from=builder --chown=nonroot:nonroot /app/public ./public

USER nonroot
EXPOSE ${PORT}

CMD ["server.js"]
