"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
const graphql_1 = require("@nestjs/graphql");
const opcao_compra_model_1 = require("./opcao-compra.model");
const tag_model_1 = require("./tag.model");
let Livro = class Livro {
};
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], Livro.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], Livro.prototype, "autorId", void 0);
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], Livro.prototype, "categoriaId", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Livro.prototype, "titulo", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Livro.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Livro.prototype, "descricao", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Livro.prototype, "isbn", void 0);
__decorate([
    (0, graphql_1.Field)((type) => Number),
    __metadata("design:type", Number)
], Livro.prototype, "numeroPaginas", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Livro.prototype, "publicacao", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Livro.prototype, "imagemCapa", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Livro.prototype, "sobre", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [opcao_compra_model_1.OpcaoCompra]),
    __metadata("design:type", Array)
], Livro.prototype, "opcoesCompra", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [tag_model_1.Tag]),
    __metadata("design:type", Array)
], Livro.prototype, "tags", void 0);
Livro = __decorate([
    (0, graphql_1.ObjectType)()
], Livro);
exports.Livro = Livro;
//# sourceMappingURL=livro.model.js.map