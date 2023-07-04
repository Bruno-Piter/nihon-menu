import cardapio from "../dados/cardapio"

export function buscaItemCardapio(termoDigitado) {
    const itemCardapio = cardapio.filter(
    (item) => 
    item.nome.toLowerCase().includes(termoDigitado.toLowerCase())
    || 
    item.descricao.toLowerCase().includes(termoDigitado.toLowerCase())
    || 
    item.categoria.toLowerCase().includes(termoDigitado.toLowerCase()))

    return itemCardapio
}

export function filtroCategoria(categoria){
    return cardapio.filter((produto) => produto.categoria.toLowerCase() === categoria.toLowerCase())
}

export function filtroSugestoes() {
    return cardapio.filter((produto) => produto.pratoSugerido === true);
}