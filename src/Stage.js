import React from "react";
import { observer } from "mobx-react";
import ReactMarkdown from "react-markdown";

import {
    Button,
    Card,
    CardBlock,
    CardHeader,
    FormGroup,
    Input,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";

import Resource from './Resource';

function Stage({ store, stage }) {
    const {
        resources,
        mission,
        setItem,
        addResource,
        removeResource,
        tab,
        setTab
    } = stage;

    return <Card className="mb-3">
        <CardBlock>
            <button type="button" onClick={e => store.removeStage(stage)} className="close"
                    aria-label="Close"><span aria-hidden="true">&times;</span></button>

            <FormGroup tag="fieldset">
                <legend>
                    <Button type="button" onClick={e => addResource()}> + </Button> Resources
                </legend>
                {resources.map((resource, index) => <Resource resource={resource} removeResource={removeResource} key={index} />)}
            </FormGroup>

            <Card className="mb-3">
                <CardHeader>
                    <Nav tabs className="card-header-tabs">
                        <NavItem><NavLink
                            href="#"
                            className={tab === 'description' && 'active'}
                            onClick={e => setTab('description')}>Exercise</NavLink></NavItem>
                        <NavItem><NavLink
                            href="#"
                            className={tab === 'preview' && 'active'}
                            onClick={e => setTab('preview')}>Preview</NavLink></NavItem>
                    </Nav>
                </CardHeader>

                <CardBlock>
                    {tab === 'description' && <Input
                        type="textarea"
                        value={mission}
                        onChange={e => setItem({ mission: e.target.value })}
                        rows="10"
                    />}

                    {tab === 'preview' && <ReactMarkdown source={mission} />}
                </CardBlock>
            </Card>
        </CardBlock>
    </Card>
}

export default observer(Stage);