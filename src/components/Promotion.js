import React from 'react';
import { Header, Container, Image, Message, Table, Divider, Icon } from 'semantic-ui-react'
const ReactMarkdown = require('react-markdown');

const Promotion = ({ title, bank, image, imageLink, description }) => {
    return (
        <div>
            <Header as='h1'>{title}</Header>
            <Image
                src={image}
                as='a'
                size='big'
                href={imageLink}
                target='_blank'
                fluid
            />
            <Divider horizontal>
                <Header as='h4'>
                    <Icon name='tag' />
          Description
        </Header>
            </Divider>
            <Message
                success
                header='Ta promocja jest aktywna'
                content='Pod banerem promocji zawsze znajduje się link do oferty banku'
            />
            <ReactMarkdown source={description} />

            {description ?
                <Specification description={description} />
                : null}
        </div>
    );
};

const Specification = ({ description }) => (
    <>
        <Divider horizontal>
            <Header as='h4'>
                <Icon name='bar chart' />
          Specifications
        </Header>
        </Divider>
        <Table definition>
            <Table.Body>
                <Table.Row>
                    <Table.Cell width={2}>Size</Table.Cell>
                    <Table.Cell>1" x 2"</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Weight</Table.Cell>
                    <Table.Cell>6 ounces</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Color</Table.Cell>
                    <Table.Cell>Yellowish</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Odor</Table.Cell>
                    <Table.Cell>Not Much Usually</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    </>
)

export default Promotion;