import React from 'react';
import { observer } from 'mobx-react';

import { Form, FormGroup, Button, Input, TextArea, Label, Container } from 'reactstrap';

function App({ store }) {
    return <Container>
        <Form onSubmit={e => e.preventDefault()}>
            <FormGroup>
                <Label>Title:</Label>
                <Input
                    value={store.title}
                    onChange={e => store.setItem({ title: e.target.value})}
                />
            </FormGroup>

            <FormGroup>
                <Label>Desciption:</Label>
                <Input
                    type="textarea"
                    value={store.description}
                    onChange={e => store.setItem({ description: e.target.value})}
                />
            </FormGroup>

            <FormGroup>
                <Button type="button"> + </Button>
                <Label>Stages</Label>
            </FormGroup>

            <pre>
                {store.toJson()}
            </pre>
        </Form>
    </Container>
}

export default observer(App);
