import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Meklēšana"
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Iedalīšana"
                options={[
                    {value: 'title', name: 'Pēc nosaukuma'},
                    {value: 'body', name: 'Pēc apraksta'},
                ]}
            />
        </div>
    );
};

export default PostFilter;
