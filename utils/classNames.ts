export const classNames = (...classNames: (string | boolean | undefined)[]) =>
  classNames.filter(Boolean).join(' ');
