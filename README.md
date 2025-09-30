# 📝 Lista de Tarefas

Uma aplicação simples e funcional de lista de tarefas desenvolvida em React com Vite.

## 🚀 Funcionalidades

- ✅ **Adicionar tarefas** - Crie tarefas com título e descrição
- ✏️ **Marcar como concluída** - Toggle para marcar/desmarcar tarefas
- 🗑️ **Remover tarefas** - Delete tarefas que não precisa mais
- 📱 **Interface responsiva** - Design limpo e centrado

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool rápida e moderna
- **JavaScript (ES6+)** - Linguagem principal
- **CSS inline** - Estilização dos componentes

## 📁 Estrutura do Projeto

```
Lista de tarefas/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx          # Componente principal da aplicação
│   ├── main.jsx         # Ponto de entrada do React
│   ├── App.css          # Estilos do componente principal
│   ├── index.css        # Estilos globais
│   └── assets/
│       └── react.svg
├── index.html           # Template HTML
├── package.json         # Dependências e scripts
├── vite.config.js       # Configuração do Vite
└── README.md           # Este arquivo
```

## 🔧 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd "Lista de tarefas"
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

### Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run preview` - Visualiza a versão de produção
- `npm run lint` - Executa o linter para verificar código

## 💡 Como Usar

1. **Adicionar Tarefa**: 
   - Digite um título no primeiro campo
   - Digite uma descrição no segundo campo  
   - Clique em "Adicionar"

2. **Marcar como Concluída**:
   - Clique no botão "Desfazer" para marcar como concluída
   - Clique em "Concluído" para desmarcar

3. **Remover Tarefa**:
   - Clique no botão vermelho "Remover"

## 🎨 Funcionalidades do Código

### Componente Principal (`src/App.jsx`)
- **Estado das tarefas**: Gerenciado com `useState`
- **Formulário controlado**: Inputs controlados pelo React
- **Manipulação de lista**: Adicionar, remover e atualizar tarefas
- **Interface dinâmica**: Estilos condicionais baseados no status

### Funcionalidades Implementadas
- `addTask()` - Adiciona nova tarefa à lista
- `toggleTask()` - Alterna status de conclusão
- `removeTask()` - Remove tarefa da lista

## 🔮 Melhorias Futuras

- [ ] Persistência no localStorage
- [ ] Categorização de tarefas
- [ ] Filtros (todas, pendentes, concluídas)
- [ ] Edição de tarefas existentes
- [ ] Data de criação/conclusão
- [ ] Arquivos CSS separados

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

⭐ **Gostou do projeto? Deixe uma estrela!**
