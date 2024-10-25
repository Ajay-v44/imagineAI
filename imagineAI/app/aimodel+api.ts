import Replicate from "replicate";
const replicate = new Replicate({
  auth: `${process.env.Replica_API_Token}`,
});

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const output: any = await replicate.run(data?.aiModelName, {
      input: {
        prompt: data?.inputPrompt + "" + data?.defaultPrompt,
      },
    });
    console.log(output);
    return Response.json({ result: output[0] });
  } catch (err) {
    console.log(err);
  }
}
