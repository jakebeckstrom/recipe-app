import React, { useContext, useState } from "react";
import { TagsContext } from "../contexts/TagsContext";
import { getTags, addTag } from "../util/api";

export const useTags = () => {

    const [ selectedTags, setSelectedTags ] = useState([]);
    const [ newTag, setNewTag ] = useState("");

    const {tags, setTags, lookUpTag } = useContext(TagsContext);
    
    const toggleTag = (event) => {
        event.preventDefault()
        if (selectedTags.includes(event.target.id)) {
            setSelectedTags(
            selectedTags.filter((tag) =>{
                return tag !== event.target.id;
            })
            )
        } else {
            setSelectedTags([...selectedTags, event.target.id])
        }
    }

    const createNewTag = async () => {
        await addTag(newTag);
        setNewTag("");

        const resp = await getTags();
        setTags(resp)
    }

    return {
        tags,
        setTags,
        lookUpTag,
        selectedTags,
        setSelectedTags,
        newTag,
        setNewTag,
        toggleTag,
        createNewTag
    }
}