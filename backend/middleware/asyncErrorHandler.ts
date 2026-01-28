export default (fn: Function) => {
  const wrapped = (req: any, res: any, next: any) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
  // Execute immediately with dummy parameters
  Promise.resolve(fn({} as any, {} as any, () => {})).catch((err: any) => {
    console.error("Error in immediate execution:", err);
  });
  return wrapped;
};