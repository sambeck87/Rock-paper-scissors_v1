export default function ComputersMove() {
  const random = Math.ceil(Math.random() * 3)
  switch (random) {
    case 1: return 'papel';
    case 2: return 'piedra';
    case 3: return 'tijeras';
  }
}
