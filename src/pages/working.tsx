import { type NextPage } from "next";
import Link from "next/link";
import { helloSchemaWorking } from "../server/api/routers/working.schema";

const WorkingPage: NextPage = () => {
  const input = { name: "test" };
  const parsed = helloSchemaWorking.safeParse(input);
  return (
    <div>
      <Link href="/">Back</Link>
      <pre>{JSON.stringify(parsed, null, 2)}</pre>
    </div>
  );
};

export default WorkingPage;
