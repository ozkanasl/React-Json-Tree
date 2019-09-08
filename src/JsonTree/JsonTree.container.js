import React, { Component } from "react";
import _ from "lodash";

import { Accordion, Icon, Table } from "semantic-ui-react";

import data from "../data";
import getChildItems from "../getChildItems";


class JsonTreeParent extends Component {

  state = {
    activeIndexes: {},
    jsonData: data
  };

  handleClick = (parentGroup, id) => {
    const { activeIndexes } = this.state;
    const newIndex = activeIndexes[parentGroup] === id ? null : id;

    this.setState({
      activeIndexes: {
        ...this.state.activeIndexes,
        [parentGroup]: newIndex
      }
    });
  };

  getTopParents = (array) => {
    return array.filter(item => !item.parentID);
  };

  handleDelete = (item) => {
    const newData = this.state.jsonData.filter(i => i.ID !== item.ID);
    this.setState({  jsonData: newData  });
  };


  renderItem(item, index, parentGroup = 0) {
    const { activeIndexes } = this.state;
    const childItems = getChildItems(this.state.jsonData, item.ID);
    const styledCollapseIcon = childItems.length > 0 ? { display: "block" } : { display: "none" };

    return (
      <div key={item.ID}>
        <Accordion.Title active={activeIndexes[parentGroup] === item.ID}>
          <Table celled>
            <Table.Body>
              <Table.Row>
                <Table.Cell style={{ width: "10%" }}
                  onClick={() => (childItems.length > 0 ? this.handleClick(parentGroup, item.ID) : false)}>
                  <Icon name="dropdown" style={styledCollapseIcon} />
                </Table.Cell>
                <Table.Cell style={{  width: "10%"  }}>{item.ID}</Table.Cell>
                <Table.Cell style={{  width: "25%"  }}>{item.Phone}</Table.Cell>
                <Table.Cell style={{  width: "20%"  }}>{item.City}</Table.Cell>
                <Table.Cell style={{ width: "20%" }}>{item.Name}</Table.Cell>
                <Table.Cell style={{ width: "5%" }} onClick={() => this.handleDelete(item)}> <Icon name="delete" /></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Accordion.Title>
        <Accordion.Content
          active={activeIndexes[parentGroup] === item.ID}>
          {
            _.map(childItems, (item2, index2) =>
              this.renderItem(item2, index2, item.ID)
            )
          }
        </Accordion.Content>
      </div>
    );
  }

  render() {
    const { activeIndexes } = this.state;
    const parentData = this.getTopParents(this.state.jsonData);
    return (
      <div>
        <Accordion className="accordion-container" styled>
          {parentData && parentData.map((item, index) => (
            this.renderItem(item, index)
          ))}
        </Accordion>
      </div>
    );
  }
}


export default JsonTreeParent;
