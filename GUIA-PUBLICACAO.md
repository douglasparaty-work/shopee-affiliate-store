# Guia de Publicação da Vitrine de Afiliados

Siga este guia simples para publicar sua vitrine no Netlify.

### 1. Gerar a versão atualizada
Sempre que fizer alterações (como trocar imagens ou adicionar produtos), execute o comando abaixo no terminal dentro da pasta `shopee-affiliate`:

```bash
npm run build
```

### 2. Localizar a pasta de publicação
Após o comando anterior terminar com sucesso, uma nova pasta chamada `dist/` será criada dentro de `shopee-affiliate`. Esta pasta contém tudo o que é necessário para o seu site funcionar.

### 3. Publicar no Netlify
1. Acesse o site: [https://app.netlify.com/](https://app.netlify.com/) e faça login.
2. No painel, procure pela seção **"Sites"**.
3. Procure a área de "Drag and drop your site output folder here" (Arraste e solte a pasta de saída do seu site aqui).
4. **Arraste a pasta `dist/`** do seu computador para dentro desse campo no site do Netlify.
5. Aguarde o upload. O Netlify fornecerá uma URL pública do seu site (ex: `https://seu-site-aleatorio.netlify.app`).

### 4. Testar os links
Após a publicação, acesse a URL fornecida pelo Netlify:
- Clique no botão "Comprar na Shopee" de cada produto.
- Verifique se ele abre uma nova aba e direciona para o link de afiliado correto.

### 5. Substituir imagens posteriormente
Quando tiver as imagens reais:
1. Salve as imagens na pasta `shopee-affiliate/public/` ou utilize um serviço de hospedagem de imagens.
2. Edite o arquivo `src/produtos.js` e substitua a URL do placeholder (`https://via.placeholder.com/...`) pela URL correta da imagem.
3. Salve o arquivo, execute `npm run build` novamente e repita o processo de publicação (o Netlify permite arrastar a pasta `dist/` atualizada para o mesmo site para atualizar o conteúdo).
