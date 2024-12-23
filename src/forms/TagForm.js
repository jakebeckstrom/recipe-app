import React from "react";

const TagForm = ({ tags, selectedTags, toggleTag}) => {

    
    if (tags === undefined) return <div>Loading</div>

    return (
        <>
            <div className="row">
                {tags.length !== 0 && tags.map((tag) => {
                return selectedTags.includes(tag.id) ?
                    <button className="btn btn-primary col-3" id={tag.id} onClick={toggleTag}>
                    {tag.tag}
                </button> :
                <button className="btn btn-secondary col-3" id={tag.id} onClick={toggleTag}>
                    {tag.tag}
                </button>}
                )}
            </div>
        </>
    )
}

export default TagForm;