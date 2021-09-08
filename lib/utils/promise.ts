export function promiseFetch(callback: () => void): Promise<void> {
  return new Promise<void>(async (resolve, reject) => {
    try {
      await callback();
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}
