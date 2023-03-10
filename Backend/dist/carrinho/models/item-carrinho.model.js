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
exports.ItemCarrinho = void 0;
const graphql_1 = require("@nestjs/graphql");
const opcao_compra_model_1 = require("../../livros/models/opcao-compra.model");
const livro_model_1 = require("../../livros/models/livro.model");
let ItemCarrinho = class ItemCarrinho {
};
__decorate([
    (0, graphql_1.Field)((type) => Number),
    __metadata("design:type", Number)
], ItemCarrinho.prototype, "quantidade", void 0);
__decorate([
    (0, graphql_1.Field)((type) => Number),
    __metadata("design:type", Number)
], ItemCarrinho.prototype, "livroId", void 0);
__decorate([
    (0, graphql_1.Field)((type) => Number),
    __metadata("design:type", Number)
], ItemCarrinho.prototype, "opcaoCompraId", void 0);
__decorate([
    (0, graphql_1.Field)((type) => opcao_compra_model_1.OpcaoCompra),
    __metadata("design:type", opcao_compra_model_1.OpcaoCompra)
], ItemCarrinho.prototype, "opcaoCompra", void 0);
__decorate([
    (0, graphql_1.Field)((type) => livro_model_1.Livro),
    __metadata("design:type", livro_model_1.Livro)
], ItemCarrinho.prototype, "livro", void 0);
ItemCarrinho = __decorate([
    (0, graphql_1.ObjectType)()
], ItemCarrinho);
exports.ItemCarrinho = ItemCarrinho;
//# sourceMappingURL=item-carrinho.model.js.map