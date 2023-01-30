type Age = number;
type Player = {
  name: string;
  age?: Age;
};

const playerNico: Player = {
  name: 'nico',
};

const playerLynn: Player = {
  name: 'lynn',
  age: 12,
};
function playerMaker(name: string): Player {
  return {
    name,
  };
}

const nico = playerMaker('nico');
nico.age = 12;
