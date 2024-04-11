import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import {
  togglePrivateReply,
  toggleMessageSameUserOnlyOnce,
  removeRequiredReaction,
  addRequiredReaction,
  addExcludedKeyword,
  removeExcludedKeyword,
  addTriggerKeyword,
  removeTriggerKeyword,
  setMessageType,
  setCommentType,
  addComment,
  changeComment,
  removeComment,
} from "@/lib/slices/editEngagementSlice";
import Badge from "./Badge";
import ToggleSwitch from "./ToggleSwitch";
import Image from "next/image";
import KeywordInput from "./KeywordInput";
import Dropdown from "./Dropdown";
import Loadable from "next/dist/shared/lib/loadable.shared-runtime";
import ExitableInput from "./ExitableInput";
import AddCommentButton from "./AddCommentButton";

const AutoResponse = () => {
  const dispatch = useAppDispatch();
  const autoLikeComments = useAppSelector((state) => {
    return state.editEngagementSlice.automaticallyLikeComments;
  });

  const commentType = useAppSelector((state) => {
    return state.editEngagementSlice.commentType;
  });

  const comments = useAppSelector((state) => {
    return state.editEngagementSlice.comments;
  });
  return (
    <div className="flex flex-col gap-4 bg-white p-4">
      <div className="flex flex-1 flex-row justify-between  ">
        <div className="bg-white opacity-60">
          Enable To Automatically Like Comments
        </div>
        <ToggleSwitch
          defaultVal={autoLikeComments}
          onSwitch={(checked) => {
            dispatch(togglePrivateReply(checked));
          }}
        />
      </div>

      <h1 className="mb-2.5 border-b border-b-base-300 py-0.5 font-semibold">
        Reply In Comments
      </h1>
      <Dropdown
        onChange={(selection) => {
          dispatch(setCommentType(selection));
        }}
        value={commentType}
        options={["Static"]}
        label={"Comment ype"}
      />
      {comments.map((comment, idx) => {
        return (
          <ExitableInput
            key={comment.toString()}
            onClear={() => {
              dispatch(removeComment(idx));
            }}
            onChange={(text) => {
              dispatch(changeComment({ index: idx, value: text }));
            }}
            value={comment}
          />
        );
      })}

      <AddCommentButton onClick={() => dispatch(addComment())} />
    </div>
  );
};

export default AutoResponse;
