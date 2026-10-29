export default async () => {
  return new Response(
    JSON.stringify({
      mensagem: "Automação NBA preparada",
      atualizadoEm: new Date().toISOString()
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
