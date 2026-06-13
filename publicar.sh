#!/usr/bin/env bash
#
# publicar.sh — Atualiza o site no ar com UM comando.
#
#   Como usar (no Terminal, dentro da pasta do projeto):
#       ./publicar.sh
#       ./publicar.sh "Adicionei o filme Três Por Um"   ← mensagem opcional
#
#   O que ele faz, em ordem:
#     1. TESTA o site (build). Se houver erro no conteúdo, PARA aqui e mostra o
#        erro — nada quebrado vai pro ar.
#     2. SALVA suas mudanças (git commit).
#     3. ENVIA pro GitHub (git push). O Vercel publica sozinho em ~1-2 min.
#
# ----------------------------------------------------------------------------

set -euo pipefail
cd "$(dirname "$0")"

MSG="${1:-Atualização de conteúdo}"

# --- 0. Nada mudou? Então não há o que fazer. --------------------------------
if [ -z "$(git status --porcelain)" ]; then
  echo "✓ Nada mudou desde a última publicação — nada a enviar."
  exit 0
fi

echo "▶ 1/3  Testando o site (pode levar ~30s)..."
if ! npm run build > /tmp/publicar-build.log 2>&1; then
  echo ""
  echo "❌ O BUILD FALHOU — NADA foi enviado (o site no ar continua intacto)."
  echo "   Quase sempre é um errinho de digitação no conteúdo. Veja o final do erro:"
  echo "──────────────────────────────────────────────────────────────────"
  tail -25 /tmp/publicar-build.log
  echo "──────────────────────────────────────────────────────────────────"
  echo "   Corrija o arquivo apontado acima e rode ./publicar.sh de novo."
  exit 1
fi
echo "✓ Site testado, sem erros."

echo "▶ 2/3  Salvando as mudanças..."
git add -A
git commit -q -m "$MSG"
echo "✓ Salvo: \"$MSG\""

echo "▶ 3/3  Enviando para o GitHub..."
BRANCH="$(git rev-parse --abbrev-ref HEAD)"
git push origin "$BRANCH"

echo ""
echo "🚀 Pronto! Enviado para a branch '$BRANCH'."
echo "   O Vercel vai publicar automaticamente em ~1 a 2 minutos."
