import { db } from "./database";

try {
  const { sql } = db
    .selectFrom("person")
    //.$if(true, (eb) => eb.where("first_name", "=", "John")) // works ok
    .$if(true, ({ where }) => where("first_name", "=", "John")) // throws error
    .compile();
  console.log(sql);
} catch (e) {
  console.log(e);
}
