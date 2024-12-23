

const api = "http://localhost:8080"

export const addRecipe = async (body) => {
    const resp = await fetch(api + "/recipe", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body),
    })
    return resp.json();
}

export const getRecipes = async () => {
    const resp = await fetch(api + "/recipe");
    const data = await resp.json();
    return data;
}

export const getOneRecipe = async (id) => {
    const resp = await fetch((api + "/recipe/" + id));
    const data = await resp.json();
    return data;
}

export const deleteRecipeById = async (id) => {
    const resp = await fetch(api + "/recipe/" + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    })
}

export const getTags = async () => {
    const resp = await fetch(api + "/tags");
    const data = await resp.json();
    return data;
}

export const addTag = async (body) => {
    const resp = await fetch(api + "/tags", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body),
    })
    return resp.json();
}

export const deleteTagById = async (id) => {
    const resp = await fetch(api + "/tags/" + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    })
}