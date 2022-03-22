ˋˋˋ  const terminada = (item) => { return item.status == 'done' }

const resultado = (item) => { return item.titulo }

let nomes = tarefas.filter(terminada) return nomes.map(resultado) } console.log(filtraTarefas()); ˋˋˋ 