INSERT INTO MOVEIS (TIPO) VALUES ('Cama');
INSERT INTO MOVEIS (TIPO) VALUES ('Sofá');
INSERT INTO MOVEIS (TIPO) VALUES ('Poltrona');
INSERT INTO MOVEIS (TIPO) VALUES ('Armário');
INSERT INTO MOVEIS (TIPO) VALUES ('Mesa');
INSERT INTO MOVEIS (TIPO) VALUES ('Cadeira');
INSERT INTO MOVEIS (TIPO) VALUES ('Estante');

-- Status 1: Disponível , Status 2: A caminho, Status 3: Entregue

INSERT INTO STATUS (NOME) VALUES ('Disponível');
INSERT INTO STATUS (NOME) VALUES ('A caminho');
INSERT INTO STATUS (NOME) VALUES ('Entregue');
INSERT INTO STATUS (NOME) VALUES ('Concluído');

-- ADMIN CREDENTIALS SENHA: ADMIN
INSERT INTO USUARIO(NOME,CPF,EMAIL,SENHA,ENDERECO) VALUES(
    'Administrador','300.300.300-30','teste@teste.com','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918','Av teste teste 320'
);