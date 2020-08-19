
import React from 'react';
import TaskList from '../components/TaskList';
import 'semantic-ui-css/semantic.min.css'

export default {
    title: 'components/TaskList',
    component: TaskList,
};
let taskList = [{
    id: 123123,
    title: 'Zapłać kartą',
    deadline: '20.08.2020',
    done: false
},
{
    id: 123123,
    title: 'Zapłać kartą',
    deadline: '20.08.2020',
    done: true
},
];
export const PlainTaskList = () => <TaskList tasks={taskList} />;
