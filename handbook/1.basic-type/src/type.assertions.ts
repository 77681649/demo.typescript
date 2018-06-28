export function toString(o: any): string {
  return <string>Object.prototype.toString.apply(<object>o);
}
