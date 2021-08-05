import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Table.scss";

class Table extends Component {
  static propTypes = {
    lists: PropTypes.arrayOf(
      PropTypes.shape({ _id: PropTypes.string.isRequired })
    ).isRequired,
  };

  render = () => {
    // passing lists prop from Board componment and mapping required data into table
    const { lists } = this.props;

    return (
    <div>
      <table className="table-counter">
        <thead>
          <th>Trello Title</th>
          <th>Task Count</th>
        </thead>
        <tbody>
        {lists.map((list) => 
          <tr>
            <td>{list.title}</td>
            <td>{list.cards.length}</td>
          </tr>
        )}   
        </tbody>
      </table>
    </div>
  )};
}

export default connect()(Table);
