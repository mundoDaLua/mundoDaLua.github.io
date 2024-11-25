---
title: Obtendo um site com HTTPS
date: 2024-06-28
# excerpt: A small excerpt of the blog post…
---

## O Problema

Como diz o ditado **"O Seguro morreu de velho, e o Desconfiado está vivo até hoje"**, ter um site seguro é essencial para proteger os dados dos usuários e garantir a confiança do público. O primeiro passo parase ter um site mais seguro é utilizando o protocolo `HTTPS` (*HTTP Secure*), que nada mais é do que o proprio `HTTP` com uma camada adicional via certificado `SSL` (*Secure Socket Layer*). Este certificado **encripta a comunicação** entre o servidor e o usuário, evitando que dados sensíveis sejam interceptados por terceiros. A fim de facilitar a obtenção deste certficado, muitos administradores de sites podem achar o processo de obtenção e configuração de um `certificado SSL` complicado e intimidador. Neste post, vamos abordar como você pode obter e configurar um `certificado SSL` de forma simples e eficiente utilizando o `certbot` e `nginx`.

## A Solução

:::note
Foi utilizado uma nomenclatura especial neste post, tudo que está entre `${}` é necessário ser alterado para os valores corretamente antes da execução!
:::

Antes de mais nada, precisamos instalar o `certbot`, uma aplicação muito interessante que nos fornece gratuitamente um certificado `SSL`, com duração de 1 ano. Para instala-lo resolvi utilizar um docker ~~afinal não quero poluir meu ambiente com aplicações terceiras rsrsrs~~.

```bash
docker run --rm -it -v .:/home/ ubuntu:22.04

apt update && apt install -y python3 certbot
certbot certonly --manual -d ${DOMAIN_NAME}
```

Com a execução do `certbot` algumas perguntas e passos são necessários para dar prosseguimento. A mais importante de todas é a ultima, onde ele vai informar uma `URL`, para o qual estamos emitindo o certificado, precisa responder corretamente.

Em meu ambiente, utilizo um `nginx`, então foi preciso adicionar a seguinte linha para completa configuração **antes** de concluir a configuração do `certbot`:

```txt
location /.well-known/acme-challenge/${ID_INFORMADO_PELO_CERTBOT} {
    return 200 '${RESPOSTA_ESPERADA_PELO_CERTBOT}';
}
```

Após adicionado corretamente as linhas ao servidor `nginx`, fiz o reboot do mesmo e garanti que a `URL` solicitada pelo `certbot` estava retornando corretamente. E só então finalizei a configuração do `certbot`.

Com isto, temos agora corretamente um certificado válido para nosso dominio! Mas antes precisamos transferir o certificado (duas `chaves.pem` o `prompt` vai informar onde estão, mas geralmente ficam em `/etc/letsencrypt/live/${DOMAIN_NAME}/`) utilizando os comandos:

```bash
cp /etc/letsencrypt/live/${DOMAIN_NAME}/fullchain.pem /home/
cp /etc/letsencrypt/live/${DOMAIN_NAME}/privkey.pem /home/
```

Estamos quase concluindo a configuração do nosso amado `HTTPS`, so precisamos transferir os certificados para o nosso `nginx` e adicionar as seguintes configurações no `default.conf` (aproveita e não esqueça de remover a `location` configurada anteriormente ~~só por garantia é limpeza de ambiente é claro rsrsrs~~)

```txt
listen       443 ssl;
listen  [::]:443 ssl;
server_name  ${DOMAIN_NAME};

include /etc/nginx/conf.d/options-ssl-nginx.conf;
ssl_dhparam /etc/nginx/conf.d/ssl-dhparams.pem;

ssl_certificate /etc/nginx/conf.d/${DOMAIN_NAME}/fullchain.pem;
ssl_certificate_key /etc/nginx/conf.d/${DOMAIN_NAME}/privkey.pem;
```

## Conclusão

Configurar um certificado `SSL` pode parecer uma tarefa difícil à primeira vista, mas com as ferramentas certas e um pouco de orientação, é perfeitamente possível fazer isso de forma **eficiente** e **segura**. Utilizando o `certbot` em conjunto com o `nginx`, conseguimos garantir que nosso site está um pouco mais **protegido** com um `certificado SSL` **válido**, aumentando a segurança e a confiança dos usuários. Não deixe de manter seu certificado atualizado e de revisar regularmente as configurações de segurança do seu servidor para garantir a proteção contínua dos dados. ~~Quem sabe no futuro não abordo uma forma de automatizar esta renovação =)~~
