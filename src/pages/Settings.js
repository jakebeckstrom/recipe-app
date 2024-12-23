import React from "react";
import { useTags } from "../hooks/TagsHook";
import { deleteTagById } from "../util/api";

const TagItem = ({tag, deleteHandler}) => {
    return (
        <div class="card">
            <div class="card-header">
                <div className="row">
                    <div className="col-6">
                        {tag.tag}
                    </div>
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={() => deleteHandler(tag.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div> 
    )
}


const Settings = () => {

    const {tags, setTags} = useTags();

    const deleteTag = async (id) => {
        await deleteTagById(id)
        const removed = tags.filter((item) => {
            return item.id !== id
        })
        setTags(removed)
    }

    return (
        <div className="col-lg-8">
            {tags && tags.map((tag) => <TagItem key={tag.id} tag={tag} deleteHandler={deleteTag} />)}
        </div>
    )
};

export default Settings;