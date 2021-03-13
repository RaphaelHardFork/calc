const add = (nb1, nb2) => {
  return nb1 + nb2
}

const sub = (nb1, nb2) => {
  return nb1 - nb2
}

const mul = (nb1, nb2) => {
  return nb1 * nb2
}

const div = (nb1, nb2) => {
  return nb1 / nb2
}

const modulo = (nb1, nb2) => {
  return nb1 % nb2
}

// Exportation des fonctions 
// commande.nom_extérieur = non_intérieur
exports.add = add
exports.sub = sub
exports.mul = mul
exports.div = div
exports.modulo = modulo