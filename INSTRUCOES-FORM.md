# 🌹 Como conectar o formulário ao Google Sheets

Passo a passo pra fazer o form da página `captura-deusas.html` salvar as respostas direto na sua planilha do Google.

---

## 1️⃣ Criar a planilha

1. Acesse [sheets.google.com](https://sheets.google.com)
2. Clique em **+ Em branco** (criar nova planilha)
3. Dê um nome, ex: **Deusas no Digital - Aplicações**
4. Deixe a planilha aberta

---

## 2️⃣ Adicionar o Apps Script

1. Na planilha, vá em **Extensões → Apps Script**
2. Vai abrir uma nova aba com o editor de código
3. Apague tudo que estiver lá
4. Abra o arquivo `apps-script-codigo.gs` (na pasta `apres_deusas`) e **copie todo o conteúdo**
5. Cole no editor do Apps Script
6. Clique no ícone de **💾 Salvar** (ou Ctrl+S / Cmd+S)
7. Dê um nome ao projeto, ex: **Form Deusas**

---

## 3️⃣ Autorizar permissões (só na primeira vez)

1. No editor, com a função `teste` selecionada no dropdown do topo, clique em **▶ Executar**
2. Vai aparecer um aviso "Autorização necessária" → clique em **Revisar permissões**
3. Escolha sua conta Google
4. Clique em **Avançado → Acessar (nome do projeto) (não seguro)**
5. Clique em **Permitir**
6. Volta na planilha e confere se apareceu uma linha "Teste · OK" — pode apagar essa linha depois.

---

## 4️⃣ Publicar como Web App

1. No editor do Apps Script, clique em **Implantar → Nova implantação**
2. Clique na engrenagem ⚙️ ao lado de "Selecionar tipo" → escolha **App da Web**
3. Preencha:
   - **Descrição:** Form Deusas
   - **Executar como:** Eu (sua conta)
   - **Quem pode acessar:** **Qualquer pessoa** ⚠️ (importante!)
4. Clique em **Implantar**
5. Vai aparecer uma **URL do app da Web** — algo como:
   `https://script.google.com/macros/s/AKfycby.../exec`
6. **Copie essa URL** e guarde

---

## 5️⃣ Colar a URL no HTML

1. Abra o arquivo `captura-deusas.html`
2. Procure por: `COLE_AQUI_A_URL_DO_SEU_APPS_SCRIPT`
3. Substitua pela URL que você copiou no passo anterior
4. Salve o arquivo

Pronto! 🌹

---

## ✅ Testando

1. Abra `captura-deusas.html` no navegador
2. Preencha o formulário e envie
3. Confere a sua planilha — a aplicação deve aparecer ali em segundos
4. Na primeira aplicação, o cabeçalho será criado automaticamente

---

## ⚠️ Se precisar fazer mudanças no Apps Script depois

Toda vez que editar o código do Apps Script, **precisa reimplantar**:
- **Implantar → Gerenciar implantações**
- Clique no lápis ✏️ → **Nova versão** → **Implantar**
- A URL continua a mesma — não precisa atualizar no HTML

---

## 📋 Colunas da planilha (geradas automaticamente)

1. Data/Hora
2. Nome + Instagram
3. E-mail
4. WhatsApp
5. Como atua hoje
6. Estado do negócio
7. Desafios no digital
8. O que quer transmutar
9. Prontidão
10. Investimento mensal
11. Algo mais

---

## 🛡️ Segurança

- O Apps Script roda na SUA conta Google
- A planilha é privada (só você acessa)
- A URL do Web App é única e não dá acesso à planilha — só recebe os dados
- O form não armazena nada localmente, só envia direto pra você
