# Lero APP

A `React` app to listen to LERO messages

### TODO

 - [x] Visual parecido com terminal
 - [x] Criar channel 'lobby' para receber broadcast de nova conversa
 - [x] Mostrar heads-up para mensagens novas em uma conversa
 - [x] Criptografia AES no tráfego das mensagens (simples)
 - [ ] End-to-end encryption com chaves RSA
 - [x] Criar página "about" com links para os repos
 - [x] Criar página de "register
 - [ ] Mostrar somente mensagens da sessão atual - e comando para carregar mensagens antigas
 - [ ] Criar "system_messages" para qnd a pessoa sai e entra da conversa
 - [ ] Enviar imagens
 - [ ] Notificação mascarada (atualize agora seus dados cadastrais KKKKKKKKKK)
 - [ ] Favoritos _maybe_
 - [ ] Arquivados _maybe_

### To Deploy

Requisitos
 - `terraform`
 - `az` azure cli
 - estar logado no `az`

Este projeto está deployado no Azure Cloud usando um `Storage Manager` com "static website" configurado. 

Para deployar use o comando `make deploy`
