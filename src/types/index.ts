export type Alimento = "carne" | "frango" | "linguica" | "paoAlho";


export const quantidadePessoas: Record<Alimento, number> = {
    carne: 400,
    frango: 400,
    linguica: 200, 
    paoAlho: 150,
} 

export const nomesAlimento: Record<string, string> = {
    carne: "Carne",
    frango: "Frango",
    linguica: "Linguiça", 
    paoAlho: "Pão de Alho",
}
