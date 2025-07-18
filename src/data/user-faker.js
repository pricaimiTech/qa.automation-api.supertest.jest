/**
 * @description Este arquivo gera dado de um usuário fake para criação e alteração do usuário
 */
import { faker } from '@faker-js/faker';

export function criarUsuario() {
  return {
    nome:faker.person.firstName(),
    sobrenome: faker.person.lastName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar()
  };
}

/**
 * @description Gera multiplos usuários fake
 */
// export const users = faker.helpers.multiple(criarUsuario, {
//   count: 5,
// });

console.log(criarUsuario());