# app.py

from flask import Flask, render_template, request, redirect, url_for
from crud_time import inserir, seleciona, atualiza, deleta

app = Flask(__name__)

@app.route('/')
def index():
    times = seleciona("%s","%s")
    return render_template('index.html', times=times)

@app.route('/adicionar', methods=['GET', 'POST'])
def adicionar():
    if request.method == 'POST':
        sigla = request.form['sigla']
        nome_clube = request.form['nome_clube']
        fundacao = request.form['fundacao']
        mascote = request.form['mascote']
        n_titulos = request.form['n_titulos']

        inserir(sigla, nome_clube, fundacao, mascote, n_titulos)
        return redirect(url_for('index'))
    return render_template('adicionar_time.html')

@app.route('/editar/<sigla>', methods=['GET', 'POST'])
def editar(sigla):
    if request.method == 'POST':
        nome_clube = request.form['nome_clube']
        fundacao = request.form['fundacao']
        mascote = request.form['mascote']
        n_titulos = request.form['n_titulos']
        atualiza(sigla, nome_clube, fundacao, mascote, n_titulos)
        return redirect(url_for('index'))
    return render_template('editar_time.html')

@app.route('/deletar/<sigla>')
def deletar(sigla):
    deleta(sigla)
    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True)