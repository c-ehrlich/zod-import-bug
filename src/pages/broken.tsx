import { type NextPage } from "next";
import Link from "next/link";
import { helloSchemaBroken } from "../server/api/routers/broken";

const BrokenPage: NextPage = () => {
  const input = { name: "test" };
  const parsed = helloSchemaBroken.safeParse(input);
  return (
    <div>
      <Link href="/">Back</Link>
      <pre>{JSON.stringify(parsed, null, 2)}</pre>
    </div>
  );
};

export default BrokenPage;
