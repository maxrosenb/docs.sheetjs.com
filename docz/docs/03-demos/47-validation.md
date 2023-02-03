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
  await fetch("http://localhost:8080/people_data.xlsx")
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

Full Code
```ts title=src/App.tsx
import { useEffect, useState } from "react";
import ReactDataGrid, { textEditor } from "react-data-grid";
import { read, utils, writeFileXLSX, WorkBook } from "xlsx";
import { z, ZodError } from "zod";
import "./App.css";
import "react-data-grid/lib/styles.css";

// create zod schema for validating data
const rowSchema = z.object({
  name: z.string(),
  age: z.number().int().min(0),
  gender: z.enum(["Male", "Female"]),
  country: z.string().optional(),
  id: z.number().int(),
});

type Row = z.infer<typeof rowSchema>;

const columns = [
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
function App() {
  const [data, setData] = useState<Row[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const fetchAndValidateData = async () => {
      const f = await (
        await fetch("http://localhost:8080/people_data.xlsx")
      ).arrayBuffer();
      const wb: WorkBook = read(f);
      const ws = wb.Sheets[wb.SheetNames[0]];
      const jsonData: Row[] = utils.sheet_to_json(ws);

      try {
        const validatedData: Row[] = jsonData.map((row) =>
          rowSchema.parse(row)
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
  }, []);

  return (
    <div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {data.length > 0 && (
        <div style={{ height: 500, width: 500 }}>
          {/* display error message if there is one */}

          <ReactDataGrid columns={columns} rows={data} />
        </div>
      )}
    </div>
  );
}

export default App;

```