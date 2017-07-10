import React from 'react';
import { observer } from 'mobx-react';
import ReactMarkdown from 'react-markdown';

import {
    Form,
    FormGroup,
    Button,
    Input,
    Label,
    Container,
    Card,
    CardBlock,
    CardHeader,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

function App({ store }) {
    return <Container className={!store.edit && 'disabled'}>
        <Form onSubmit={e => e.preventDefault()}>
            <FormGroup>
                <Label>Title:</Label>
                <Input
                    value={store.title}
                    onChange={e => store.setItem({ title: e.target.value})}
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
                        onChange={e => store.setItem({ description: e.target.value})}
                        rows="10"
                    />}

                    {store.tab === 'preview' && <ReactMarkdown source={store.description}/>}
                </CardBlock>
            </Card>

            <FormGroup tag="fieldset">
                <legend><Button type="button" onClick={e => store.addStage()}> + </Button> Stages</legend>

                {store.stages.map((stage, index) => {
                    const { url, mission, setItem} = stage;

                    return <Card className="mb-3" key={index}>
                        <CardBlock>
                            <button type="button" onClick={e => store.removeStage(stage)} className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>

                            <FormGroup>
                                <Label>Url</Label>
                                <Input value={url} onChange={e => setItem({url: e.target.value})}/>
                            </FormGroup>

                            <FormGroup>
                                <Label>Mission</Label>
                                <Input type="textarea" value={mission} onChange={e => setItem({mission: e.target.value})}/>
                            </FormGroup>
                        </CardBlock>
                    </Card>
                })}
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
