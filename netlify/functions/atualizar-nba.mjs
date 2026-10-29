
export default async (req) => {
  const { next_run } = await req.json();

  console.log(
    "Sixers Brasil: execução diária iniciada.",
    next_run
  );
};

export const config = {
  schedule: "0 12 * * *"
};
