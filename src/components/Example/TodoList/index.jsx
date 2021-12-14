import React, { useState } from 'react';

function TodoList(props) {
    const [job, setJob] = useState()
    const [listJob, setListJob] = useState(()=> {
        const storageJob = JSON.parse(localStorage.getItem('jobs'))
        return storageJob ?? []
    })

    const handleSubmit = () => {
        setListJob(prev => {
            const newListJob = [...prev, job]

            //convert to json
            const jsonJobs = JSON.stringify(newListJob)
            localStorage.setItem('jobs', jsonJobs)

            return newListJob
        })
        
        setJob('')
    }

    return (
        <div style={{padding: 30}}>
            <input type="text" 
                value={job}
                onChange={(e) => setJob(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>

            <ul>
                {listJob.map((job, index)=> (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;