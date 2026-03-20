// ================================
// 📌 Tipos de dados simulados (boas práticas)
// ================================

/**
 * @typedef {Object} Tarefa
 * @property {number} id
 * @property {string} titulo
 * @property {string} descricao
 * @property {"pendente" | "concluida"} status
 * @property {Date} criadaEm
 */

// ================================
// 📌 Utilidades
// ================================

const gerarId = () => Date.now();

const validarTexto = (texto) => {
  if (!texto || typeof texto !== "string") {
    throw new Error("Texto inválido");
  }
  return texto.trim();
};

// ================================
// 📌 Classe principal
// ================================

class GerenciadorDeTarefas {
  constructor() {
    this.tarefas = [];
  }

  // ================================
  // 📌 CRUD
  // ================================

  adicionarTarefa(titulo, descricao) {
    const novaTarefa = {
      id: gerarId(),
      titulo: validarTexto(titulo),
      descricao: validarTexto(descricao),
      status: "pendente",
      criadaEm: new Date(),
    };

    this.tarefas.push(novaTarefa);
    console.log("✅ Tarefa adicionada:", novaTarefa.titulo);
  }

  listarTarefas() {
    return this.tarefas;
  }

  buscarPorId(id) {
    return this.tarefas.find((t) => t.id === id);
  }

  removerTarefa(id) {
    const tamanhoAntes = this.tarefas.length;

    this.tarefas = this.tarefas.filter((t) => t.id !== id);

    if (this.tarefas.length < tamanhoAntes) {
      console.log("🗑️ Tarefa removida");
    } else {
      console.log("⚠️ Tarefa não encontrada");
    }
  }

  // ================================
  // 📌 Atualizações
  // ================================

  concluirTarefa(id) {
    const tarefa = this.buscarPorId(id);

    if (!tarefa) {
      console.log("⚠️ Tarefa não encontrada");
      return;
    }

    tarefa.status = "concluida";
    console.log("✔️ Tarefa concluída:", tarefa.titulo);
  }

  editarTarefa(id, novosDados) {
    const tarefa = this.buscarPorId(id);

    if (!tarefa) {
      console.log("⚠️ Tarefa não encontrada");
      return;
    }

    tarefa.titulo = novosDados.titulo
      ? validarTexto(novosDados.titulo)
      : tarefa.titulo;

    tarefa.descricao = novosDados.descricao
      ? validarTexto(novosDados.descricao)
      : tarefa.descricao;

    console.log("✏️ Tarefa atualizada:", tarefa.titulo);
  }

  // ================================
  // 📌 Filtros e estatísticas
  // ================================

  listarPorStatus(status) {
    return this.tarefas.filter((t) => t.status === status);
  }

  contarTarefas() {
    return {
      total: this.tarefas.length,
      concluidas: this.tarefas.filter((t) => t.status === "concluida").length,
      pendentes: this.tarefas.filter((t) => t.status === "pendente").length,
    };
  }

  // ================================
  // 📌 Ordenação
  // ================================

  ordenarPorData() {
    return [...this.tarefas].sort(
      (a, b) => a.criadaEm - b.criadaEm
    );
  }
}

// ================================
// 📌 Uso prático (simulação real)
// ================================

const app = new GerenciadorDeTarefas();

// Adicionando tarefas
app.adicionarTarefa("Estudar JavaScript", "Revisar map, filter e reduce");
app.adicionarTarefa("Treinar código", "Fazer projeto prático");

// Pegando ID de uma tarefa
const tarefas = app.listarTarefas();
const primeiraTarefaId = tarefas[0]?.id;

// Editando tarefa
app.editarTarefa(primeiraTarefaId, {
  descricao: "Revisar todos os métodos de array",
});

// Concluindo tarefa
app.concluirTarefa(primeiraTarefaId);

// Estatísticas
console.log("📊 Estatísticas:", app.contarTarefas());

// Listando pendentes
console.log("📌 Pendentes:", app.listarPorStatus("pendente"));

// Removendo tarefa
if (tarefas[1]) {
  app.removerTarefa(tarefas[1].id);
}

// Lista final
console.log("📋 Todas tarefas:", app.listarTarefas());