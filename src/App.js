import React from 'react';
import { observer } from 'mobx-react';

import {
    Form,
    FormGroup,
    Button,
    Input,
    Label,
    Container
} from 'reactstrap';

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
                <Button type="button" onClick={e => store.addStage()}> + </Button>
                <Label>Stages</Label>
            </FormGroup>

            {store.stages.map((stage, index) => {
                const { url, mission, setItem} = stage;

                return <FormGroup tag="fieldset" key={index}>
                    <Button onClick={e => store.removeStage(stage)}> - </Button>

                    <FormGroup>
                        <Label>Url</Label>
                        <Input value={url} onChange={e => setItem({url: e.target.value})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Mission</Label>
                        <Input type="textarea" value={mission} onChange={e => setItem({mission: e.target.value})}/>
                    </FormGroup>
                </FormGroup>
            })}

            <FormGroup tag="fieldset">
                <legend>Environments</legend>

                {store.environments.map((environment) => <FormGroup check>
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
