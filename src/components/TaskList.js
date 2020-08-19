import React from 'react';
import { Header, Container, Image, Message, Table, Divider, Icon, Progress, List } from 'semantic-ui-react'

const TaskList = ({ tasks }) => {
    let percentDone = tasks.filter(t => t.done).length / tasks.length * 100;
    return (
        <>
            <Progress
                percent={percentDone}
                indicating
                size={'tiny'} />
            <List divided relaxed>
                {tasks.map(task =>
                    <List.Item>
                        <List.Icon
                            name='circle outline'
                            size='large'
                            verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                            <List.Description as='a'>Updated 10 mins ago</List.Description>
                        </List.Content>
                    </List.Item>
                )}
            </List>
        </>
    );
};


export default TaskList;