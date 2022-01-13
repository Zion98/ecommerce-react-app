import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
//   selectShopCollections,
  selectCollectionsForPreivew,
} from "../../redux/Shop/shop.selector";
import Preview from "../Preview/Preview";

import "./OverviewCollections.scss";

const OverviewCollections = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => {
        return <Preview key={id} {...otherProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreivew,
});

export default connect(mapStateToProps)(OverviewCollections);
