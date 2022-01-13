import React from "react";
import { Route } from "react-router-dom";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import { selectShopCollections } from "../../redux/Shop/shop.selector";
// import Preview from "../../components/Preview/Preview";

import OverviewCollections from "../../components/OverviewCollections";
import Collection from "../Collection/collection";
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={OverviewCollections} />
      <Route path={`${match.path}/:collectionId`} component={Collection}/>
    </div>
  );
};

export default ShopPage;
