export const api_url = "https://instagram-hn.herokuapp.com/api";

export function uuid() {
  const { random } = Math;
  return `${random() * 9999}-${Date.now()}`;
}
