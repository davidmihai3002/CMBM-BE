export class Utils {
  getUUID() {
    return crypto.randomUUID();
  }

  getCurrentDate() {
    const now = new Date().getTime();
    return now;
  }
}
