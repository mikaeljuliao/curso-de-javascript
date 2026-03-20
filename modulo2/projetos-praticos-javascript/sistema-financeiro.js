// ================================
// 📌 TIPOS (JSDoc)
// ================================

/**
 * @typedef {"receita" | "despesa"} Tipo
 */

/**
 * @typedef {Object} Transacao
 * @property {number} id
 * @property {string} descricao
 * @property {number} valor
 * @property {Tipo} tipo
 * @property {string} categoria
 * @property {Date} data
 */

// ================================
// 📌 UTILIDADES
// ================================

const Utils = {
  gerarId() {
    return Date.now() + Math.floor(Math.random() * 10000);
  },

  validarTexto(valor, campo) {
    if (!valor || typeof valor !== "string") {
      throw new Error(`Campo inválido: ${campo}`);
    }
    return valor.trim();
  },

  validarNumero(valor, campo) {
    if (typeof valor !== "number" || isNaN(valor)) {
      throw new Error(`Número inválido: ${campo}`);
    }
    return valor;
  },

  formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  },

  clonar(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
};

// ================================
// 📌 LOGGER
// ================================

const Logger = {
  info(msg) {
    console.log("ℹ️", msg);
  },
  sucesso(msg) {
    console.log("✅", msg);
  },
  erro(msg) {
    console.error("❌", msg);
  },
};

// ================================
// 📌 CLASSE PRINCIPAL
// ================================

class SistemaFinanceiro {
  constructor() {
    this.transacoes = [];
  }

  // ================================
  // 📌 CRUD
  // ================================

  adicionar({ descricao, valor, tipo, categoria }) {
    try {
      const transacao = {
        id: Utils.gerarId(),
        descricao: Utils.validarTexto(descricao, "descricao"),
        valor: Utils.validarNumero(valor, "valor"),
        tipo,
        categoria: Utils.validarTexto(categoria, "categoria"),
        data: new Date(),
      };

      this.transacoes.push(transacao);
      Logger.sucesso(`Transação adicionada: ${descricao}`);
    } catch (e) {
      Logger.erro(e.message);
    }
  }

  listar() {
    return Utils.clonar(this.transacoes);
  }

  remover(id) {
    const tamanho = this.transacoes.length;
    this.transacoes = this.transacoes.filter((t) => t.id !== id);

    if (this.transacoes.length < tamanho) {
      Logger.info("Transação removida");
    } else {
      Logger.erro("ID não encontrado");
    }
  }

  editar(id, dados) {
    const t = this.transacoes.find((t) => t.id === id);

    if (!t) {
      Logger.erro("Transação não encontrada");
      return;
    }

    if (dados.descricao) t.descricao = Utils.validarTexto(dados.descricao, "descricao");
    if (dados.valor) t.valor = Utils.validarNumero(dados.valor, "valor");
    if (dados.tipo) t.tipo = dados.tipo;
    if (dados.categoria) t.categoria = dados.categoria;

    Logger.sucesso("Transação atualizada");
  }

  // ================================
  // 📌 FILTROS
  // ================================

  filtrarPorTipo(tipo) {
    return this.transacoes.filter((t) => t.tipo === tipo);
  }

  filtrarPorCategoria(cat) {
    return this.transacoes.filter((t) => t.categoria === cat);
  }

  filtrarPorValor(min, max) {
    return this.transacoes.filter((t) => t.valor >= min && t.valor <= max);
  }

  buscarTexto(texto) {
    return this.transacoes.filter((t) =>
      t.descricao.toLowerCase().includes(texto.toLowerCase())
    );
  }

  // ================================
  // 📌 CÁLCULOS
  // ================================

  totalReceitas() {
    return this.transacoes
      .filter((t) => t.tipo === "receita")
      .reduce((acc, t) => acc + t.valor, 0);
  }

  totalDespesas() {
    return this.transacoes
      .filter((t) => t.tipo === "despesa")
      .reduce((acc, t) => acc + t.valor, 0);
  }

  saldo() {
    return this.totalReceitas() - this.totalDespesas();
  }

  // ================================
  // 📌 AGRUPAMENTO
  // ================================

  agruparPorCategoria() {
    return this.transacoes.reduce((acc, t) => {
      acc[t.categoria] = (acc[t.categoria] || 0) + t.valor;
      return acc;
    }, {});
  }

  // ================================
  // 📌 ORDENAÇÃO
  // ================================

  ordenarPorValor() {
    return [...this.transacoes].sort((a, b) => b.valor - a.valor);
  }

  ordenarPorData() {
    return [...this.transacoes].sort((a, b) => b.data - a.data);
  }

  // ================================
  // 📌 RELATÓRIO
  // ================================

  gerarRelatorio() {
    return {
      receitas: Utils.formatarMoeda(this.totalReceitas()),
      despesas: Utils.formatarMoeda(this.totalDespesas()),
      saldo: Utils.formatarMoeda(this.saldo()),
      categorias: this.agruparPorCategoria(),
    };
  }
}

// ================================
// 📌 SIMULAÇÃO GRANDE (PESO DE CÓDIGO)
// ================================

const app = new SistemaFinanceiro();

// Gerando dados
for (let i = 0; i < 100; i++) {
  app.adicionar({
    descricao: `Receita ${i}`,
    valor: Math.random() * 5000,
    tipo: "receita",
    categoria: "salario",
  });

  app.adicionar({
    descricao: `Despesa ${i}`,
    valor: Math.random() * 2000,
    tipo: "despesa",
    categoria: "contas",
  });
}

// Operações
console.log(app.gerarRelatorio());
console.log(app.filtrarPorTipo("receita").length);
console.log(app.ordenarPorValor().slice(0, 5));
console.log(app.buscarTexto("1"));

// ================================
// 📌 EXTRA: SIMULAÇÃO DE USO PESADO
// ================================

for (let i = 0; i < 50; i++) {
  const lista = app.listar();
  if (lista[i]) {
    app.editar(lista[i].id, { valor: lista[i].valor + 100 });
  }
}

console.log("Final:", app.gerarRelatorio());