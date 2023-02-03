---
title: Validation with Zod
---

# Validation with Zod

This demo illustrates how to use the TypeScript-first validation library Zod and SheetJS to validate spreadsheet data. While this demo uses React, the same principles can be applied to validing spreadsheet data in any JavaScript framework or in vanilla JavaScript.



:::note

This demo was tested against `zod 3.20.2`, `React 18.2.0`, and `vite 4.0.0` on 2023 February 1.

:::

## Defining a Zod Schema

Zod uses schemas to define the structure of data. To be able to validate the spreadsheet data, we must first define a Zod schema for the data we want to validate.

The validated data from the spreadsheet should be an array of objects, where each object represents a row in the spreadsheet. the Zod API provides the `z.object` function, which is used to define the schema for an object. The `z.object` function takes an object whose keys are the names of the properties and whose values are the schemas for the properties.


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

A schema for the whole sheet can then be defined as an array of these rows:
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

 As a TypeScript-first library, Zod will automatically infer the TypeScript type of the schema from the type of the object passed to `z.object`. You can use `z.infer` to extract the inferred type from the schema.

 ```ts
type Row = z.infer<typeof rowSchema>;

type Spreadsheet = Row[];
 ```

The derived `Row` type then looks like this:
    
```ts
type Row = {
    country?: string | undefined;
    name: string;
    age: number;
    gender: "Male" | "Female";
    id: number;
}
```

## Validating Data

The `parse` method of a zod schema validates the values passed to the function against the schema. If the data is valid, it returns the data. If the data is invalid, it throws a `ZodError`.

```ts title="src/App.tsx"
const f = await(
  await fetch("http://maxrosenb.com/people_data.xlsx")
).arrayBuffer();
const wb: WorkBook = read(f);
const ws = wb.Sheets[wb.SheetNames[0]];
const jsonData: Spreadsheet = utils.sheet_to_json(ws);

try {
  const validatedData: Spreadsheet = spreadsheetSchema.parse(jsonData);
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
  console.log(result.error);
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
  const jsonData: Spreadsheet = utils.sheet_to_json(ws);

  try {
    const validatedData: Spreadsheet = await spreadsheetSchema.parseAsync(
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
type Spreadsheet = Row[];

function App() {
  const [data, setData] = useState<Spreadsheet>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndValidateData = async () => {
      const f = await (
        await fetch("http://maxrosenb.com/people_data.xlsx")
      ).arrayBuffer();
      const wb: WorkBook = read(f);
      const ws = wb.Sheets[wb.SheetNames[0]];
      const jsonData: Spreadsheet = utils.sheet_to_json(ws);

      try {
        const validatedData: Spreadsheet =
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

## zod-xlsx
[zod-xlsx](https://github.com/sidwebworks/zod-xlsx) is an extension of zod that can be used to validate entire xlsx files. It provides a `createValidator` function that takes in an xlsx workbook and creates a validator object. The validator object has a `validate` method that takes a zod schema as an argument and validates the data in the workbook against it. 
View the [zod-xlsx documentation](https://github.com/sidwebworks/zod-xlsx#usage) for more details and a full example.
