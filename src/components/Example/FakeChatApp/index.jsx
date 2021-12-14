import React, { useState } from 'react';

const lessons = [
    {
        id: 1,
        name: 'ReactJS'
    },
    {
        id: 2,
        name: 'Arrow function'
    },
    {
        id: 3,
        name: 'SPA/MPA'
    }
]
function FakeChatApp(props) {
    const [lessonId, setLessonId] = useState(1)

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li 
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? 
                            'red' :
                            '#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FakeChatApp;