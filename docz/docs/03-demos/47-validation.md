---
title: Validation with Zod
---

# Validation with Zod

This demo demonstrates how to use the TypeScript-first validation library Zod to validate an excel file. We will use the data grid library [react-data-grid](https://adazzle.github.io/react-data-grid/#/common-features) to display the validated data.



:::note

This demo was tested against `zod 3.20.2`, `React 18.2.0`, and `vite 4.0.0` on 2023 February 1.

:::

## Defining a Zod Schema

We first define a Zod schema for the data we want to validate. The validated data from the spreadsheet should be an array of objects with the following properties


```ts title="src/App.tsx"
const rowSchema = z.object({
  name: z.string(),
  age: z.number().int().min(0),
  gender: z.enum(["Male", "Female"]),
  country: z.string().optional(),
  id: z.number().int(),
});
```

<!-- Write something about how we will use zod to make an array of this schema -->

A schema for the whole sheet is defined as an array of these rows:
```ts
const spreadsheetSchema = z.array(rowSchema);
```

:::note

Zod lets you provide custom validation logic via *refinements*. These refinements often cannot be represented in TypeScript's type system. For example, if we wanted to ensure that the length of the `name` property is less than 50 characters, we could use a refinement:

```ts
const nameSchema = z.string().refine((s) => s.length < 50, {
  message: "Name must be less than 50 characters",
});

const rowSchema = z.object({
  name: nameSchema,
  age: z.number().int().min(0),
  gender: z.enum(["Male", "Female"]),
  country: z.string().optional(),
  id: z.number().int(),
});
```

:::

## Static Type Inference with Zod

 As a TypeScript-first library, Zod will automatically infer the TypeScript type of the schema from the type of the object passed to `z.object`. This can be used to define a type for the validated data.

 ```ts
type Row = z.infer<typeof rowSchema>;

type PeopleSpreadsheet = Row[];
 ```

The derived `Row` type looks like this:
    
```ts
type Row = {
    country?: string | undefined;
    name: string;
    age: number;
    gender: "Male" | "Female";
    id: number;
}
```

## Validating Data with the Zod Schema

The `parse` method of the zod schema validates the values of the data against the schema. If the data is valid, it returns the data. If the data is invalid, it throws a `ZodError`.

```ts title="src/App.tsx"
const f = await(
  await fetch("http://maxrosenb.com/people_data.xlsx")
).arrayBuffer();
const wb: WorkBook = read(f);
const ws = wb.Sheets[wb.SheetNames[0]];
const jsonData: PeopleSpreadsheet = utils.sheet_to_json(ws);

try {
  const validatedData: PeopleSpreadsheet = spreadsheetSchema.parse(jsonData);
  setData(validatedData);
} catch (e) {
  if (e instanceof ZodError) {
    console.log(e);
    setErrorMessage("Error validating spreadsheet");
  }
}
```
## Safe Parsing
If you don't want to throw errors when validation fails, Zod also provides a `safeParse` method that returns a `ParseResult` object. The `success` property of the `ParseResult` object is a boolean indicating whether the data is valid. If the data is valid, the `data` property contains the validated data. If the data is invalid, the `error` property contains the `ZodError`.
```ts
const result = spreadsheetSchema.safeParse(jsonData);
if (!result.success) {
  setErrorMessage("Spreadsheet contains invalid data");
}
setData(result.data);
```

## Asynchronous Parsing

Zod also provides `parseAsync` and `safeParseAsync` methods that can be used to validate data asynchronously.

```ts
const fetchAndValidateData = async () => {
  const f = await (
    await fetch("http://maxrosenb.com/people_data.xlsx")
  ).arrayBuffer();
  const wb: WorkBook = read(f);
  const ws = wb.Sheets[wb.SheetNames[0]];
  const jsonData: PeopleSpreadsheet = utils.sheet_to_json(ws);

  try {
    const validatedData: PeopleSpreadsheet = await spreadsheetSchema.parseAsync(
      jsonData
    );
    setData(validatedData);
  } catch (e) {
    if (e instanceof ZodError) {
      console.log(e);
      setErrorMessage("Error validating spreadsheet");
    }
  }
};
fetchAndValidateData();
```

## Full Demo

```ts title=src/App.tsx
import { useEffect, useState } from "react";
import ReactDataGrid, { textEditor } from "react-data-grid";
import { read, utils, writeFileXLSX, WorkBook } from "xlsx";
import { z, ZodError } from "zod";
import "./App.css";
import "react-data-grid/lib/styles.css";

const columns = [ // react-data-grid column definitions
  {
    key: "name",
    name: "Name",
  },
  {
    key: "age",
    name: "Age",
  },
  {
    key: "gender",
    name: "Gender",
  },
  {
    key: "country",
    name: "Country",
  },
  {
    key: "id",
    name: "ID",
  },
];

const rowSchema = z.object({
  name: z.string(),
  age: z.number().int().min(0),
  gender: z.enum(["Male", "Female"]),
  country: z.string().optional(),
  id: z.number().int(),
});

const spreadsheetSchema = z.array(rowSchema);

type Row = z.infer<typeof rowSchema>;
type PeopleSpreadsheet = Row[];

function App() {
  const [data, setData] = useState<PeopleSpreadsheet>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndValidateData = async () => {
      const f = await (
        await fetch("http://maxrosenb.com/people_data.xlsx")
      ).arrayBuffer();
      const wb: WorkBook = read(f);
      const ws = wb.Sheets[wb.SheetNames[0]];
      const jsonData: PeopleSpreadsheet = utils.sheet_to_json(ws);

      try {
        const validatedData: PeopleSpreadsheet =
          await spreadsheetSchema.parseAsync(jsonData);
        setData(validatedData);
      } catch (e) {
        if (e instanceof ZodError) {
          console.log(e);
          setErrorMessage("Error validating spreadsheet");
        }
      }
    };
    fetchAndValidateData();
  }, []);

  return (
    <div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {data.length > 0 && (
        <div style={{ height: 500, width: 500 }}>
          <ReactDataGrid columns={columns} rows={data} />
        </div>
      )}
    </div>
  );
}

export default App;
```
