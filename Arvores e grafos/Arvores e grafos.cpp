#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Usuario {
    char email[50];
    char senha[50];
    char nome[50];
    char cpf[12];
    char endereco[100];
    char contatos[50];
    struct Usuario *esquerda;
    struct Usuario *direita;
} Usuario;

typedef struct ORG {
    char email[50];
    char senha[50];
    char nome_fantasia[50];
    char razao_social[50];
    char cnpj[18];
    char endereco[100];
    char contato[50];
    char descricao[100];
    char categoria[50];
    struct ORG *esquerda;
    struct ORG *direita;
} ORG;

typedef struct ADM {
    char nome[50];
    char senha[50];
    struct ADM *esquerda;
    struct ADM *direita;
} ADM;

Usuario* criarUsuario(char* email, char* senha, char* nome, char* cpf, char* endereco, char* contatos) {
    Usuario* novo = (Usuario*)malloc(sizeof(Usuario));
    strcpy(novo->email, email);
    strcpy(novo->senha, senha);
    strcpy(novo->nome, nome);
    strcpy(novo->cpf, cpf);
    strcpy(novo->endereco, endereco);
    strcpy(novo->contatos, contatos);
    novo->esquerda = novo->direita = NULL;
    return novo;
}

ORG* criarORG(char* email, char* senha, char* nome_fantasia, char* razao_social, char* cnpj, char* endereco, char* contato, char* descricao, char* categoria) {
    ORG* novo = (ORG*)malloc(sizeof(ORG));
    strcpy(novo->email, email);
    strcpy(novo->senha, senha);
    strcpy(novo->nome_fantasia, nome_fantasia);
    strcpy(novo->razao_social, razao_social);
    strcpy(novo->cnpj, cnpj);
    strcpy(novo->endereco, endereco);
    strcpy(novo->contato, contato);
    strcpy(novo->descricao, descricao);
    strcpy(novo->categoria, categoria);
    novo->esquerda = novo->direita = NULL;
    return novo;
}

ADM* criarADM(char* nome, char* senha) {
    ADM* novo = (ADM*)malloc(sizeof(ADM));
    strcpy(novo->nome, nome);
    strcpy(novo->senha, senha);
    novo->esquerda = novo->direita = NULL;
    return novo;
}

Usuario* inserirUsuario(Usuario* raiz, Usuario* novo) {
    if (raiz == NULL) return novo;
    if (strcmp(novo->email, raiz->email) < 0)
        raiz->esquerda = inserirUsuario(raiz->esquerda, novo);
    else
        raiz->direita = inserirUsuario(raiz->direita, novo);
    return raiz;
}

ORG* inserirORG(ORG* raiz, ORG* novo) {
    if (raiz == NULL) return novo;
    if (strcmp(novo->email, raiz->email) < 0)
        raiz->esquerda = inserirORG(raiz->esquerda, novo);
    else
        raiz->direita = inserirORG(raiz->direita, novo);
    return raiz;
}

ADM* inserirADM(ADM* raiz, ADM* novo) {
    if (raiz == NULL) return novo;
    if (strcmp(novo->nome, raiz->nome) < 0)
        raiz->esquerda = inserirADM(raiz->esquerda, novo);
    else
        raiz->direita = inserirADM(raiz->direita, novo);
    return raiz;
}

Usuario* buscarUsuario(Usuario* raiz, char* email) {
    if (raiz == NULL || strcmp(raiz->email, email) == 0)
        return raiz;
    if (strcmp(email, raiz->email) < 0)
        return buscarUsuario(raiz->esquerda, email);
    else
        return buscarUsuario(raiz->direita, email);
}

ORG* buscarORG(ORG* raiz, char* email) {
    if (raiz == NULL || strcmp(raiz->email, email) == 0)
        return raiz;
    if (strcmp(email, raiz->email) < 0)
        return buscarORG(raiz->esquerda, email);
    else
        return buscarORG(raiz->direita, email);
}

ADM* buscarADM(ADM* raiz, char* nome) {
    if (raiz == NULL || strcmp(raiz->nome, nome) == 0)
        return raiz;
    if (strcmp(nome, raiz->nome) < 0)
        return buscarADM(raiz->esquerda, nome);
    else
        return buscarADM(raiz->direita, nome);
}

int main() {
    Usuario* usuarios = NULL;
    ORG* orgs = NULL;
    ADM* adms = NULL;

    usuarios = inserirUsuario(usuarios, criarUsuario("usuario1@example.com", "senha1", "Usuario Um", "11111111111", "Endereco 1", "Contato 1"));
    orgs = inserirORG(orgs, criarORG("org1@example.com", "senha1", "Nome Fantasia 1", "Razao Social 1", "11111111111111", "Endereco 1", "Contato 1", "Descricao 1", "Categoria 1"));
    adms = inserirADM(adms, criarADM("Admin Um", "senha1"));

    Usuario* u = buscarUsuario(usuarios, "usuario1@example.com");
    if (u != NULL)
        printf("Usuario encontrado: %s\n", u->nome);
    else
        printf("Usuario nao encontrado\n");

    ORG* o = buscarORG(orgs, "org1@example.com");
    if (o != NULL)
        printf("ORG encontrada: %s\n", o->nome_fantasia);
    else
        printf("ORG nao encontrada\n");

    ADM* a = buscarADM(adms, "Admin Um");
    if (a != NULL)
        printf("ADM encontrado: %s\n", a->nome);
    else
        printf("ADM nao encontrado\n");

    return 0;
}
