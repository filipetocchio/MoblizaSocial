#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>

using namespace std;

// Estrutura para armazenar informações de login
struct User {
    string email;
    string senha;
};

// Estrutura para armazenar informações detalhadas de registro
struct UsuarioComum {
    string nome;
    string cpf;
    string endereco;
    string contatos;
    string email;
    string senha;
};

struct ORG {
    string nomeFantasia;
    string razaoSocial;
    string cnpj;
    string endereco;
    string contato;
    string descricao;
    string categoria;
    string email;
    string senha;
};

struct ADM {
    string nome;
    string senha;
};

// Estrutura para representar cada nó da árvore de menus
struct MenuNode {
    string name;
    vector<MenuNode*> children;

    MenuNode(string n) : name(n) {}
};

// Funções de menu
void mostrarMenu(MenuNode* node);
void mostrarMenuUsuario();
void mostrarMenuORG();
void mostrarMenuADM();
void configurarTema();
void configurarConta();
void mostrarTermos();
void falarConosco();
void sobreNos();

// Mapas para armazenar usuários
unordered_map<string, UsuarioComum> usuariosComuns;
unordered_map<string, ORG> orgs;
unordered_map<string, ADM> adms;

void registrarUsuarioComum() {
    UsuarioComum user;
    cout << "\n\tRegistro de Usuário Comum\n";
    cout << "\n\tNome: ";
    getline(cin, user.nome);
    cout << "\n\tCPF: ";
    getline(cin, user.cpf);
    cout << "\n\tEndereço: ";
    getline(cin, user.endereco);
    cout << "\n\tContatos: ";
    getline(cin, user.contatos);
    cout << "\n\tEmail: ";
    getline(cin, user.email);
    cout << "\n\tSenha: ";
    getline(cin, user.senha);
    usuariosComuns[user.email] = user;
    cout << "\n\tRegistro concluído!\n";
}

void registrarORG() {
    ORG org;
    cout << "\n\tRegistro de ORG\n";
    cout << "\n\tNome Fantasia: ";
    getline(cin, org.nomeFantasia);
    cout << "\n\tRazão Social: ";
    getline(cin, org.razaoSocial);
    cout << "\n\tCNPJ: ";
    getline(cin, org.cnpj);
    cout << "\n\tEndereço: ";
    getline(cin, org.endereco);
    cout << "\n\tContato: ";
    getline(cin, org.contato);
    cout << "\n\tDescrição: ";
    getline(cin, org.descricao);
    cout << "\n\tCategoria: ";
    getline(cin, org.categoria);
    cout << "\n\tEmail: ";
    getline(cin, org.email);
    cout << "\n\tSenha: ";
    getline(cin, org.senha);
    orgs[org.email] = org;
    cout << "\n\tRegistro concluído!\n";
}

void registrarADM() {
    ADM adm;
    cout << "\n\tRegistro de ADM\n";
    cout << "\n\tNome: ";
    getline(cin, adm.nome);
    cout << "\n\tSenha: ";
    getline(cin, adm.senha);
    adms[adm.nome] = adm;
    cout << "\n\tRegistro concluído!\n";
}

bool loginUsuarioComum() {
    string email, senha;
    cout << "\n\tLogin de Usuário Comum\n";
    cout << "\n\tEmail: ";
    getline(cin, email);
    cout << "\n\tSenha: ";
    getline(cin, senha);
    if (usuariosComuns.find(email) != usuariosComuns.end() && usuariosComuns[email].senha == senha) {
        cout << "\n\tLogin bem-sucedido!\n";
        mostrarMenuUsuario();
        return true;
    }
    cout << "\n\tEmail ou senha incorretos.\n";
    return false;
}

bool loginORG() {
    string email, senha;
    cout << "\n\tLogin de ORG\n";
    cout << "\n\tEmail: ";
    getline(cin, email);
    cout << "\n\tSenha: ";
    getline(cin, senha);
    if (orgs.find(email) != orgs.end() && orgs[email].senha == senha) {
        cout << "\n\tLogin bem-sucedido!\n";
        mostrarMenuORG();
        return true;
    }
    cout << "\n\tEmail ou senha incorretos.\n";
    return false;
}

bool loginADM() {
    string nome, senha;
    cout << "\n\tLogin de ADM\n";
    cout << "\n\tNome: ";
    getline(cin, nome);
    cout << "\n\tSenha: ";
    getline(cin, senha);
    if (adms.find(nome) != adms.end() && adms[nome].senha == senha) {
        cout << "\n\tLogin bem-sucedido!\n";
        mostrarMenuADM();
        return true;
    }
    cout << "\n\tNome ou senha incorretos.\n";
    return false;
}

void mostrarMenu(MenuNode* node) {
    if (!node) return;

    int escolha;
    do {
        cout << "\n\t--- " << node->name << " ---\n";
        for (size_t i = 0; i < node->children.size(); ++i) {
            cout << "\t" << i + 1 << ". " << node->children[i]->name << "\n";
        }
        cout << "\t0. Voltar\n";
        cout << "\n\tEscolha uma opção: ";
        cin >> escolha;
        cin.ignore();

        if (escolha > 0 && escolha <= node->children.size()) {
            mostrarMenu(node->children[escolha - 1]);
        } else if (escolha != 0) {
            cout << "\n\tOpção inválida. Tente novamente.\n";
        }
    } while (escolha != 0);
}

void mostrarMenuUsuario() {
    // Criação da árvore de menus para Usuário Comum
    MenuNode* root = new MenuNode("Menu Usuário Comum");
    root->children.push_back(new MenuNode("Configurações"));
    root->children.push_back(new MenuNode("Termos e Condições"));
    root->children.push_back(new MenuNode("Fale Conosco"));
    root->children.push_back(new MenuNode("Sobre Nós"));

    mostrarMenu(root);
}

void mostrarMenuORG() {
    // Criação da árvore de menus para ORG
    MenuNode* root = new MenuNode("Menu ORG");
    root->children.push_back(new MenuNode("Configurações"));
    root->children.push_back(new MenuNode("Termos e Condições"));
    root->children.push_back(new MenuNode("Fale Conosco"));
    root->children.push_back(new MenuNode("Sobre Nós"));

    mostrarMenu(root);
}

void mostrarMenuADM() {
    // Criação da árvore de menus para ADM
    MenuNode* root = new MenuNode("Menu ADM");
    root->children.push_back(new MenuNode("Configurações"));
    root->children.push_back(new MenuNode("Termos e Condições"));
    root->children.push_back(new MenuNode("Fale Conosco"));
    root->children.push_back(new MenuNode("Sobre Nós"));

    mostrarMenu(root);
}

void configurarTema() {
    int escolha;
    cout << "\t\n--- Configurações de Tema ---\n";
    cout << "\t1. Modo Escuro\n";
    cout << "\t2. Modo Claro\n";
    cout << "\t3. Modo Sistema\n";
    cout << "\n\tEscolha uma opção: ";
    cin >> escolha;
    cin.ignore();
    cout << "\n\tTema configurado com sucesso.\n";
}

void configurarConta() {
    int escolha;
    cout << "\t\n--- Configurações de Conta ---\n";
    cout << "\t1. Alterar Email\n";
    cout << "\t2. Redefinir Senha\n";
    cout << "\t3. Excluir Conta\n";
    cout << "\n\tEscolha uma opção: ";
    cin >> escolha;
    cin.ignore();
    cout << "\n\tConfiguração alterada com sucesso.\n";
}

void mostrarTermos() {
    cout << "\t\n--- Termos e Condições ---\n";
    cout << "\n\tAqui estão os termos e condições do serviço...\n";
}

void falarConosco() {
    cout << "\t\n--- Fale Conosco ---\n";
    cout << "\n\tEntre em contato conosco pelo email...\n";
}

void sobreNos() {
    cout << "\t\n--- Sobre Nós ---\n";
    cout << "\n\tInformações sobre a organização...\n";
}

int main() {
    int escolha;
    do {
        cout << "\n\t--- Menu Principal ---\n";
        cout << "\n\t1. Registrar Usuário Comum\n";
        cout << "\t2. Registrar ORG\n";
        cout << "\t3. Registrar ADM\n";
        cout << "\t4. Login Usuário Comum\n";
        cout << "\t5. Login ORG\n";
        cout << "\t6. Login ADM\n";
        cout << "\t0. Sair\n";
        cout << "\n\tEscolha uma opção: ";
        cin >> escolha;
        cin.ignore();

        switch (escolha) {
            case 1:
                registrarUsuarioComum();
                break;
            case 2:
                registrarORG();
                break;
            case 3:
                registrarADM();
                break;
            case 4:
                if (loginUsuarioComum()) return 0;
                break;
            case 5:
                if (loginORG()) return 0;
                break;
            case 6:
                if (loginADM()) return 0;
                break;
            case 0:
                cout << "\n\tSaindo...\n";
                break;
            default:
                cout << "\n\tOpção inválida. Tente novamente.\n";
        }
    } while (escolha != 0);

    return 0;
}
