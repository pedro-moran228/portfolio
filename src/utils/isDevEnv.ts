export function isDevEnv(label = "") {
  return import.meta.env.DEV ? label : "";
}
