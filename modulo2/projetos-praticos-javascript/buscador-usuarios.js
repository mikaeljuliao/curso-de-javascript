// ================================
// 📌 Configuração da API
// ================================

const API_URL = "https://jsonplaceholder.typicode.com/users";

// ================================
// 📌 Utilidades
// ================================

const formatarUsuario = (usuario) => {
  return {
    id: usuario.id,
    nome: usuario.name,
    email: usuario.email,
    cidade: usuario.address.city,
    empresa: usuario.company.name,
  };
};

const exibirErro = (mensagem) => {
  console.error("❌ Erro:", mensagem);
};

// ================================
// 📌 Classe principal
// ================================

class BuscadorDeUsuarios {
  constructor() {
    this.usuarios = [];
  }

  // ================================
  // 📌 Buscar dados da API
  // ================================

  async buscarUsuarios() {
    try {
      console.log("🔄 Buscando usuários...");

      const resposta = await fetch(API_URL);

      if (!resposta.ok) {
        throw new Error("Erro na requisição");
      }

      const dados = await resposta.json();

      // Transformando os dados
      this.usuarios = dados.map(formatarUsuario);

      console.log("✅ Usuários carregados com sucesso");
    } catch (erro) {
      exibirErro(erro.message);
    }
  }

  // ================================
  // 📌 Listar usuários
  // ================================

  listarUsuarios() {
    return this.usuarios;
  }

  // ================================
  // 📌 Buscar por nome
  // ================================

  buscarPorNome(nome) {
    return this.usuarios.filter((usuario) =>
      usuario.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }

  // ================================
  // 📌 Buscar por ID
  // ================================

  buscarPorId(id) {
    return this.usuarios.find((usuario) => usuario.id === id);
  }

  // ================================
  // 📌 Estatísticas simples
  // ================================

  contarPorCidade() {
    return this.usuarios.reduce((acc, usuario) => {
      acc[usuario.cidade] = (acc[usuario.cidade] || 0) + 1;
      return acc;
    }, {});
  }

  // ================================
  // 📌 Ordenação
  // ================================

  ordenarPorNome() {
    return [...this.usuarios].sort((a, b) =>
      a.nome.localeCompare(b.nome)
    );
  }
}

// ================================
// 📌 Execução prática
// ================================

async function main() {
  const app = new BuscadorDeUsuarios();

  await app.buscarUsuarios();

  console.log("📋 Todos usuários:", app.listarUsuarios());

  console.log("🔍 Busca por nome (Leanne):", app.buscarPorNome("Leanne"));

  console.log("👤 Buscar por ID:", app.buscarPorId(1));

  console.log("📊 Usuários por cidade:", app.contarPorCidade());

  console.log("🔤 Ordenados por nome:", app.ordenarPorNome());
}

// Executando
main();