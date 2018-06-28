namespace functionIdentity {
  interface IdentityFunc<T> {
    (arg: T): T;
  }

  let identity: IdentityFunc<string> = function(arg) {
    return arg;
  };
}
