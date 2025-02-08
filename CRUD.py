# Projeto_BD - CRUD

from database import conecta_bd, encerra_conn


def main():
    connection = conecta_bd()
    cursor = connection.cursor()

    # CREATE
    def insert(time, nome):
        cmd_insert = "INSERT INTO premier (time,nome) VALUES (%s,%s)"
        values = time, nome
        cursor.execute(cmd_insert, values)
        connection.commit()
        print("Dados inseridos com sucesso!!")

    
    def seleciona(time,nome):

        