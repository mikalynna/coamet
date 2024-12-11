function getFirstDefined(...args) {
  for (let i = 0; i < args.length; i++) {
    if (args[i] !== undefined && args[i] !== null) {
      return args[i];
    }
  }
  return undefined; // Return undefined if no defined value is found
}
