import { TimeService } from './times.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncionarioService } from './funcionario.service';
import { HttpClient } from '@angular/common/http';
import { ElencoService } from './elenco.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projeto-banco-de-dados';
  isSelectTecnico: boolean = false;
  isSelectMedico: boolean = false;
  isSelectScouting: boolean = false;
  selectedTime: string = '';
  selectedDepartamento: string = '';
  nomeDepartamento: string = '';
  selectedPosicoes: string = '';
  nomePosicoes: string = '';
  siglaTime: string = '';
  anos: number[] = [];
  anoCriacao: number | null = null;
  formGroupFuncionario: FormGroup;
  formGroupElenco: FormGroup;
  formGroupTime: FormGroup;
  isExpanded = false; // ✅ Controla a expansão do card
  isExpanded2 = false; // ✅ Controla a expansão do card
  isExpanded3 = false; // ✅ Controla a expansão do card
  isExpanded4 = false; // ✅ Controla a expansão do card
  isExpanded5 = false; // ✅ Controla a expansão do
  isExpanded6 = false; // ✅ Controla a expansão do ca
  isExpanded7 = false; // ✅ Controla a expansão do ca
  isExpanded8 = false; // ✅ Controla a expansão do ca
  isExpanded9 = false; // ✅ Controla a expansão do ca
  isExpanded10 = false; // ✅ Controla a expansão do ca
  isExpanded11 = false; // ✅ Controla a expansão do ca
  isExpanded12 = false; // ✅ Controla a expansão do ca

  constructor(private fb: FormBuilder, private funcionarioService: FuncionarioService, private http: HttpClient, private elencoService: ElencoService, private timeService: TimeService) {
    this.formGroupFuncionario = this.fb.group({
      nome: ['', Validators.required],
      idade: ['', [Validators.required, Validators.min(18)]],
      profissao: ['', Validators.required],
      departamento: ['', Validators.required],
      nomeDepartamento: ['']
    });

    this.formGroupElenco = this.fb.group({
      nome: ['', Validators.required],
      idade: ['', [Validators.required, Validators.min(18)]],
      valorMercado: ['', Validators.required],
      profissao: ['', Validators.required],
      siglaTime: [''],
      siglaNacionalidade: [''],
      posicao: [''],
      idTime: ['']
    });

    this.formGroupTime = this.fb.group({
      nome: ['', Validators.required],
      data: [''],
      mascote: [''],
      siglaTime: [''],
      titulos: ['']
    });

  }

  ngOnInit() {
    const anoAtual = new Date().getFullYear();
    for (let ano = anoAtual; ano >= 1900; ano--) {
      this.anos.push(ano);
    }
  }

  departamentosMap: { [key: string]: string } = {
    tecnico: 'Técnico',
    medico: 'Médico',
    scouting: 'Scouting'
  };

  public onDepartamentoChange() {
    debugger
    this.nomeDepartamento = this.departamentosMap[this.selectedDepartamento] || '';
  }


  posicoesMap: { [key: string]: string } = {
    goleiro: 'Goleiro',
    zagueirocentral: 'Zagueiro central',
    lateralesquerdo: 'Lateral esquerdo',
    lateraldireito: 'Lateral direitoGoleiro',
    volante: 'Volante',
    meiocampistacentral: 'Meio-campista central',
    meiocampistaofensivo: 'Meio-campista ofensivo',
    meiocampistaesquerdo: 'Meio-campista esquerdo',
    meiocampistadireito: 'Meio-campista direito',
    pontaesquerda: 'Ponta esquerda',
    pontadireita: 'Ponta direita',
    centroavante: 'Centro avante',
    atacante: 'Atacante',
  };

  classificacoes = [
    { id_classificacao: 1, vitoria: 10, derrota: 2, empate: 3, saldo_gols: 15, gols_feitos: 30, pontos: 33, gols_sofridos: 15, id_times: 5 },
    { id_classificacao: 2, vitoria: 8, derrota: 5, empate: 2, saldo_gols: 10, gols_feitos: 25, pontos: 26, gols_sofridos: 15, id_times: 3 },
    { id_classificacao: 3, vitoria: 7, derrota: 4, empate: 4, saldo_gols: 8, gols_feitos: 22, pontos: 25, gols_sofridos: 14, id_times: 7 }
  ];

  public onPosicoesChange() {
    debugger
    this.nomePosicoes = this.posicoesMap[this.selectedPosicoes] || '';
  }

  public onPatrocinadorChange(event: any) {
    if (event.target.value === 'tecnico') {
      this.isSelectScouting = false;
      this.isSelectMedico = false;
      this.isSelectTecnico = true;
    } else if (event.target.value === 'medico') {
      this.isSelectTecnico = false;
      this.isSelectScouting = false;
      this.isSelectMedico = true;
    } else if (event.target.value === 'scouting') {
      this.isSelectMedico = false;
      this.isSelectTecnico = false;
      this.isSelectScouting = true;
    }
  }

  // Mapeamento de times para siglas
  siglas: { [key: string]: string } = {
    LIV: 'LIV', ARS: 'ARS', NFO: 'NFO', CHE: 'CHE',
    MCI: 'MCI', NEW: 'NEW', BOU: 'BOU', AVL: 'AVL',
    FUL: 'FUL', BHA: 'BHA', BRE: 'BRE', CRY: 'CRY',
    MUN: 'MUN', TOT: 'TOT', WHU: 'WHU', EVE: 'EVE',
    WOL: 'WOL', LEI: 'LEI', IPS: 'IPS', SOU: 'SOU'
  };

  // Atualiza a sigla automaticamente
  public onTimeChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedTime = selectElement.value;
    this.siglaTime = this.siglas[this.selectedTime] || '';
  }

  public toggleCardPatrocinadores() {
    debugger
    this.isExpanded = !this.isExpanded; // ✅ Alterna entre expandido e recolhido
  }

  public toggleCardTimes() {
    this.isExpanded2 = !this.isExpanded2;
  }

  public toggleCardEstadio() {
    this.isExpanded3 = !this.isExpanded3;
  }

  public toggleCardFuncionario() {
    this.isExpanded4 = !this.isExpanded4;
  }

  public toggleCardElenco() {
    this.isExpanded5 = !this.isExpanded5;
  }

  public toggleCardArbitros() {
    this.isExpanded6 = !this.isExpanded6;
  }

  public toggleCardPosicao() {
    this.isExpanded7 = !this.isExpanded7;
  }
  public toggleCardDepartamentos() {
    this.isExpanded8 = !this.isExpanded8;
  }

  public toggleCardJogos() {
    this.isExpanded9 = !this.isExpanded9;
  }

  public toggleCardConfronto() {
    this.isExpanded10 = !this.isExpanded10;
  }

  public toggleCardClassificacao() {
    this.isExpanded11 = !this.isExpanded11;
  }

  public toggleBotaoFecharPatrocinadores() {
    debugger
    // limpar os campos
  }

  public onDelete () {
    if (this.formGroupTime.valid) {
      this.timeService.deleteTime(this.formGroupTime.value).subscribe(() => {
        alert('Time excluido com sucesso!');
        this.formGroupTime.reset();
      });
    }
  }

  public onUpdate () {
    if (this.formGroupTime.valid) {
      this.timeService.updateTime(this.formGroupElenco.value).subscribe(() => {
        alert('Elenco atualizado com sucesso!');
        this.formGroupElenco.reset();
      });
    }
  }

  public onCreate () {
    if (this.formGroupFuncionario.valid) {
      this.funcionarioService.addFuncionario(this.formGroupFuncionario.value).subscribe(() => {
        alert('Funcionário cadastrado com sucesso!');
        this.formGroupFuncionario.reset();
      });
    }
    if (this.formGroupElenco.valid) {
      this.elencoService.addElenco(this.formGroupElenco.value, this.formGroupElenco.value.nome).subscribe(() => {
        alert('Elenco cadastrado com sucesso!');
        this.formGroupElenco.reset();
      });
    }
  }
}
