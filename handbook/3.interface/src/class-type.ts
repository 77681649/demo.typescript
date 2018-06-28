interface IClock {
  beep();
}

class Clock implements IClock {
  constructor(hour: number, minute: number) {
    return this;
  }

  beep() {}
}
