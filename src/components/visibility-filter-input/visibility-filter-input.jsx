import React from "react";
import { connect } from "react-redux";

import Form from "react-bootstrap/Form";

import { setFilter } from "../../actions/actions";

function VisibilityFilterInput(props) {
  return (
    <Form>
      <Form.Control
        type="text"
        onChange={(e) => props.setFilter(e.target.value)}
        value={props.visibilityFilter}
        placeholder="Movie search"
      />
    </Form>
  );
}

export default connect(null, { setFilter })(VisibilityFilterInput);
