-- Cria o banco de dados
CREATE DATABASE MobSocial;

-- Conecta ao banco de dados MobSocial
\c MobSocial;

-- Cria a tabela para usuários comuns
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf CHAR(11) UNIQUE NOT NULL,
    endereco VARCHAR(150),
    contatos VARCHAR(100),
    email VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(50) NOT NULL
);

-- Cria a tabela para organizações (ORGs)
CREATE TABLE orgs (
    id SERIAL PRIMARY KEY,
    nome_fantasia VARCHAR(100) NOT NULL,
    razao_social VARCHAR(100) NOT NULL,
    cnpj CHAR(18) UNIQUE NOT NULL,
    endereco VARCHAR(150),
    contato VARCHAR(50),
    descricao TEXT,
    categoria VARCHAR(50),
    email VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(50) NOT NULL
);

-- Cria a tabela para administradores
CREATE TABLE adms (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(50) NOT NULL
);

-- Cria a tabela para login
CREATE TABLE login (
    id SERIAL PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL,
    tipo_usuario VARCHAR(10) CHECK (tipo_usuario IN ('usuario', 'org', 'adm')) NOT NULL,
    FOREIGN KEY (email) REFERENCES usuarios(email),
    FOREIGN KEY (email) REFERENCES orgs(email),
    FOREIGN KEY (email) REFERENCES adms(nome)
);

-- Cria a tabela para configurações
CREATE TABLE configuracoes (
    id SERIAL PRIMARY KEY,
    id_usuario INT,
    tema VARCHAR(20) CHECK (tema IN ('modo escuro', 'modo claro', 'modo sistema')),
    configuracao_tipo VARCHAR(10) CHECK (configuracao_tipo IN ('usuario', 'org')) NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id_usuario) REFERENCES orgs(id)
);

-- Cria a tabela para termos e condições
CREATE TABLE termos_condicoes (
    id SERIAL PRIMARY KEY,
    texto TEXT NOT NULL
);

-- Cria a tabela para "Fale Conosco"
CREATE TABLE fale_conosco (
    id SERIAL PRIMARY KEY,
    mensagem TEXT NOT NULL,
    email VARCHAR(50),
    FOREIGN KEY (email) REFERENCES usuarios(email),
    FOREIGN KEY (email) REFERENCES orgs(email)
);

-- Cria a tabela para "Sobre Nós"
CREATE TABLE sobre_nos (
    id SERIAL PRIMARY KEY,
    descricao TEXT NOT NULL
);
