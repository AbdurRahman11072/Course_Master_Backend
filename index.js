// Compatibility shim for hosts that run `node index.js`
(async () => {
  try {
    await import('./dist/server.js');
  } catch (err) {
    console.error('Failed to start app from ./dist/server.js', err);
    process.exit(1);
  }
})();
