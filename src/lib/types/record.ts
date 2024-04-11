import EditEngagementState from "./settings";

type Record = {
  id: number;
  name: string;
  engaged: number;
  unique: number;
  acquired: number;
  conversion: string;
  selected?: boolean;
  settings?: EditEngagementState;
};

export default Record;
