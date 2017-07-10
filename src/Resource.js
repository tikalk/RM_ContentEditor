import React from "react";
import { observer } from "mobx-react";

import {
    FormGroup,
    Input,
    Label,
} from "reactstrap";

function Resource({ resource, removeResource }) {
    const { url, setItem } = resource;

    return <FormGroup>
        <button type="button"
                onClick={e => removeResource(resource)}
                className="close"
                aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>

        <Label>Url:</Label>
        <Input value={url} onChange={e => setItem({ url: e.target.value })} />
    </FormGroup>
}

export default observer(Resource);