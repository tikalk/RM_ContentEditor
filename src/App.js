import React from "react";
import { observer } from "mobx-react";
import ReactMarkdown from "react-markdown";

import {
    Button,
    Card,
    CardBlock,
    CardHeader,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";

import Stage from './Stage';

function App({ store }) {
    return <Container className={!store.edit && 'disabled'}>
        <Form onSubmit={e => e.preventDefault()}>
            <FormGroup>
                <Label>Title:</Label>
                <Input
                    value={store.title}
                    onChange={e => store.setItem({ title: e.target.value })}
                />
            </FormGroup>

            <Card className="mb-3">
                <CardHeader>
                    <Nav tabs className="card-header-tabs">
                        <NavItem><NavLink
                            href="#"
                            className={store.tab === 'description' && 'active'}
                            onClick={e => store.setTab('description')}>Description</NavLink></NavItem>
                        <NavItem><NavLink
                            href="#"
                            className={store.tab === 'preview' && 'active'}
                            onClick={e => store.setTab('preview')}>Preview</NavLink></NavItem>
                    </Nav>
                </CardHeader>

                <CardBlock>
                    {store.tab === 'description' && <Input
                        type="textarea"
                        value={store.description}
                        onChange={e => store.setItem({ description: e.target.value })}
                        rows="10"
                    />}

                    {store.tab === 'preview' && <ReactMarkdown source={store.description} />}
                </CardBlock>
            </Card>

            <FormGroup tag="fieldset">
                <legend><Button type="button" onClick={e => store.addStage()}> + </Button> Stages</legend>

                {store.stages.map((stage, index) => <Stage store={store} stage={stage} key={index} />)}
            </FormGroup>

            <FormGroup tag="fieldset">
                <legend>Environments</legend>

                {store.environments.map((environment, index) => <FormGroup check key={index}>
                    <Label check>
                        <Input type="radio" name='environment' onClick={e => store.setItem({ environment })} />{' '}
                        {environment}
                    </Label>
                </FormGroup>)}

            </FormGroup>

            <Button onClick={e => store.save()}>Save</Button>

            <br />
            <br />

            <pre className="bg-faded p-2 rounded">
                 <code>{store.toJson()}</code>
            </pre>
        </Form>
    </Container>
}

export default observer(App);
