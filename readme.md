# Instruções de Uso

Este script Node.js foi desenvolvido para ler arquivos com a extensão `.DEC` em uma pasta específica e gravar os nomes encontrados em um arquivo de texto chamado `nomes.txt`. Siga as instruções abaixo para configurar e executar o script.

## Pré-requisitos

- Node.js instalado em seu sistema. Você pode baixá-lo e instalá-lo a partir do [site oficial do Node.js](https://nodejs.org/).

## Configuração

1. Clone ou baixe este repositório em sua máquina local.

2. Abra um terminal ou prompt de comando e navegue até o diretório onde você salvou os arquivos do repositório.

3. Execute o seguinte comando para instalar as dependências necessárias:

```bash
npm install
```

## Executando o Script
Certifique-se de que você está no diretório raiz do projeto onde o arquivo index.js está localizado.

Execute o seguinte comando para rodar o script:

```bash
node index.js
```

O script irá ler os arquivos .DEC presentes na pasta gravadas, extrair os nomes e gravá-los em um arquivo chamado nomes.txt.

## Notas

- Certifique-se de que a pasta gravadas exista no mesmo diretório onde o script está sendo executado.
- O script espera que os arquivos .DEC sigam um padrão específico de formatação, onde o nome completo é encontrado na primeira linha do arquivo.
- Os nomes são ordenados em ordem alfabética antes de serem gravados no arquivo nomes.txt.