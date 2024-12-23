import React from "react";
import TagForm from "../forms/TagForm";
import { useTags } from "../hooks/TagsHook";

const RecipeSearch = ({searchTags, setSearchTags}) => {

    const { tags } = useTags();

    const toggleTag = (event) => {
        event.preventDefault()
        if (searchTags.includes(event.target.id)) {
            setSearchTags(
            searchTags.filter((tag) =>{
                return tag !== event.target.id;
            })
            )
        } else {
            setSearchTags([...searchTags, event.target.id])
        }
    }

    return (
        <TagForm tags={tags} selectedTags={searchTags} toggleTag={toggleTag} />
    )
}

export default RecipeSearch;