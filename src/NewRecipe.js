import React from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";

const initialValues = {
  name: "",
  ingredients: [
    {
      name: "",
      amount: "",
      unit: "",
    },
  ],
  instructions: [""],
};

const AddNewRecipe = () => (
  <div className="container">
    <div className="col text-center">
      <h1 className="p-2 m-2">Add New Recipe</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form className="col text-center">
            <label>Name: </label>
            <Field type="text" name="name" placeholder="Enter Name" />
            <FieldArray name="ingredients">
              {({ insert, remove, push }) => (
                <div>
                  <h4>ingredients</h4>
                  {values.ingredients.length > 0 &&
                    values.ingredients.map((ing, index) => (
                      <div className="row border p-2" key={index}>
                        <div className="col">
                          <label htmlFor={`ingredients.${index}.name`}>
                            Name
                          </label>
                          <Field
                            name={`ingredients.${index}.name`}
                            placeholder="Ex. Butter"
                            type="text"
                          />
                          <ErrorMessage
                            name={`ingredients.${index}.name`}
                            component="div"
                            className="field-error"
                          />
                        </div>
                        <div className="col">
                          <label htmlFor={`ingredients.${index}.amount`}>
                            Amount
                          </label>
                          <Field
                            name={`ingredients.${index}.amount`}
                            placeholder="ex. 5"
                            type="text"
                          />
                          <ErrorMessage
                            name={`ingredients.${index}.name`}
                            component="div"
                            className="field-error"
                          />
                          <Field name="unit" as="select">
                            <option value="cup">Cup</option>
                            <option value="oz">Oz</option>
                            <option value="tbsp">Tbsp</option>
                            <option value="tsp">Tsp</option>
                          </Field>
                        </div>

                        <div className="col-1">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => remove(index)}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    ))}
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => push({ name: "", amount: "", unit: "" })}
                  >
                    Add
                  </button>
                </div>
              )}
            </FieldArray>
            <FieldArray name="instructions">
              {({ insert, remove, push }) => (
                <div>
                  <h4>Instructions</h4>
                  {values.instructions.length > 0 &&
                    values.instructions.map((ing, index) => (
                      <div className="row" key={index}>
                        <div className="col">
                          <label htmlFor={`instructions.${index}`}>
                            Step {index + 1}:
                          </label>
                          <Field
                            style={{ width: 300 }}
                            name={`instructions.${index}`}
                            placeholder="Ex. preheat oven to 350"
                            type="text"
                          />
                          <ErrorMessage
                            name={`instructions.${index}`}
                            component="div"
                            className="field-error"
                          />
                        </div>
                        <div className="col-1">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => remove(index)}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    ))}
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => push("")}
                  >
                    Add
                  </button>
                </div>
              )}
            </FieldArray>
            <button type="submit" className="btn btn-primary m-2">
              Add New Recipe
            </button>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);

export default AddNewRecipe;
