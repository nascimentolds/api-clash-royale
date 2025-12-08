# Usa uma imagem leve do Node
FROM node:18-alpine

# Define onde o app vai ficar no container
WORKDIR /app

# Copia os arquivos de configuração primeiro
COPY package*.json ./

# Instala só o necessário pra rodar
RUN npm ci --only=production

# Copia o resto dos arquivos
COPY . .

# Libera a porta 3000
EXPOSE 3000

# Inicia a API
CMD ["npm", "start"]