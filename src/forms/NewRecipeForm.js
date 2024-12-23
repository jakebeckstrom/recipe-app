import React from "react";
import { Formik, Field, Form } from "formik";
import { addRecipe, addTag, getTags } from "../util/api";
import { useTags } from "../hooks/TagsHook";
import TagForm from "./TagForm";

const quickAddValues = {
    name: "",
    recipe: "",
    tags: [],
  }

const NewRecipeForm = () => {

    const {tags, createNewTag, toggleTag, newTag, setNewTag, selectedTags } = useTags();

    return (
        <Formik
          initialValues={quickAddValues}
          onSubmit={async (values)=> {
            values.tags = selectedTags;
            const res = await addRecipe(values);
            alert(JSON.stringify(res, null, 2));
          }}
          >
            {({values}) =>(
              <Form className="col text-center">
                <div className="row">
                  <div className="col-4">
                    <label>Name: </label>
                    <Field type="text" name="name" placeholder="Name"/>
                  </div>
                </div>
                <div className="row">
                  <Field as="textarea" type="text" name="recipe" placeholder="Paste recipe Here" />
                </div>
                <div className="row">

                </div>
                    <TagForm tags={tags} selectedTags={selectedTags}  toggleTag={toggleTag} />
                    <div className="row">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="New Tag" value={newTag} onChange={(e) => setNewTag(e.target.value)}/>
                            <button class="btn btn-outline-secondary" type="button" onClick={createNewTag}>Add</button>
                        </div>
                    </div>
                <div className="row">
                  
                </div>
                <div>
                  <button type="submit" className="btn btn-primary m-2">
                    Quick Add Recipe
                  </button>
                </div>
              </Form>
            )}
          </Formik> 
    )
}

export default NewRecipeForm;