import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { deleteDocument } from "../actions/DocumentActions";

import { Link } from "react-router-dom";
class DocumentItem extends Component {
  onDeleteClick = (id) => {
    this.props.deleteDocument(id);
  };
  render() {
    const { document } = this.props;
    this.state = { sNo: 0 };
    return (
      <div>
      console.log("inside document item");
        <td>
          <Link to={`/updateDocument/${document.documentId}`}>
            <i className="fa fa-edit pr-1"> Update</i>
          </Link>
          &nbsp;&nbsp;
          <Link onClick={this.onDeleteClick.bind(this, document.documentId)}>
            Delete
            <i className="fa fa-minus-circle pr-1"> Delete</i>
          </Link>
        </td>
        </div>
      
    );
  }
}
DocumentItem.propTypes = {
  deleteDocument: PropTypes.func.isRequired,
};
export default connect(null, { deleteDocument })(DocumentItem);
