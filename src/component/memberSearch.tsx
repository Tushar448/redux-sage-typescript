import * as React from "react";

import { useMemberSearch } from "./useMemberSearch";
import Demo from "./demo";
export interface MemberSearchProps {}

const MemberSearch: React.FC = () => {
  const { data } = useMemberSearch();
  return (
    <React.Fragment>
      <h1>Member Search</h1>
      {data && <Demo demo={data} />}
    </React.Fragment>
  );
};

export default MemberSearch;
