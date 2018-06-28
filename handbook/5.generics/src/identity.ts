function identity<T>(arg: T): T {
  return arg;
}

identity<string>("aha");
identity("aha");
