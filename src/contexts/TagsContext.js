import React, { createContext, useEffect, useState } from "react";
import { getTags } from "../util/api";

export const TagsContext = createContext();

const TagsContextProvider = ({children}) => {
    const [ tags, setTags ] = useState([]);

    useEffect(() => {
        async function get() {
          const resp = await getTags();
          setTags(resp)
        }
        get();
      }, [])

    const lookUpTag = (tag) => {
        for (var i=0;i<tags.length;i++) {
            if (tag === tags[i].id) {
                return tags[i].tag; 
            }
        }
    }

    return(
        <TagsContext.Provider value={{tags, setTags, lookUpTag}}>
            {children}
        </TagsContext.Provider>
    )
}

export default TagsContextProvider;