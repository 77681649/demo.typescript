interface Person {
  name: String;
  width: Number;
  height: Number;
}

export default function createPerson(
  name: string,
  width: number,
  height: number
): Person {
  return {
    name,
    width,
    height
  };
}
