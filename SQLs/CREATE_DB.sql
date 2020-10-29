CREATE TABLE USUARIO(
    USUARIO_ID SERIAL PRIMARY KEY , 
    NOME VARCHAR,
    CPF VARCHAR,
    EMAIL VARCHAR,
    SENHA VARCHAR,
    ENDERECO VARCHAR
);

CREATE TABLE MOVEIS(
    MOVEL_ID SERIAL PRIMARY KEY ,
    TIPO VARCHAR
);

CREATE TABLE STATUS(
    STATUS_ID SERIAL PRIMARY KEY ,
    NOME VARCHAR
);

CREATE TABLE VENDA(
    VENDA_ID SERIAL PRIMARY KEY ,
    USUARIO_ID INTEGER,
    MOVEL_ID INTEGER,
    STATUS_ID INTEGER,
    DATA_VENDA VARCHAR,
    IMAGEM VARCHAR
);

