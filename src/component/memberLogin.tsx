import * as React from "react";
import { useEffect, useState } from "react";
import Demo from "./demo";
import { getLoginData } from "../action/demoContent";
import { useDispatch, useSelector } from "react-redux";
export interface MemberLoginProps {}

const MemberLogin: React.FC = () => {
  const dispatch = useDispatch();
  const memberSearchData = useSelector((state: any) => state.saga.demo);
  const [showMemberSearch, setMemberSearch] = useState([]);

  useEffect(() => {
    dispatch(getLoginData());
  }, []);

  useEffect(() => {
    if (memberSearchData) {
      const { data } = memberSearchData;
      setMemberSearch(data);
    }
  }, [memberSearchData]);
  return (
    <React.Fragment>
      <h1>Member search</h1>
      {showMemberSearch && showMemberSearch.length > 0 && (
        <Demo demo={showMemberSearch} />
      )}
    </React.Fragment>
  );
};

export default MemberLogin;
