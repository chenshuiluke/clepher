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
} from "@/lib/slices/editEngagementSlice";
import Badge from "./Badge";
import ToggleSwitch from "./ToggleSwitch";
import Image from "next/image";
import KeywordInput from "./KeywordInput";
import Dropdown from "./Dropdown";
import Loadable from "next/dist/shared/lib/loadable.shared-runtime";

const Settings = () => {
  const dispatch = useAppDispatch();
  const privateReplies = useAppSelector((state) => {
    return state.editEngagementSlice.privatelyReplyToFirstLevelComments;
  });
  const messageSameUser = useAppSelector((state) => {
    return state.editEngagementSlice.messageSameUserOnlyOnce;
  });
  const requiredReactions = useAppSelector((state) => {
    return state.editEngagementSlice.requiredReactions;
  });
  const excludedKeywords = useAppSelector((state) => {
    return state.editEngagementSlice.excludedKeywords;
  });
  const triggerKeywords = useAppSelector((state) => {
    return state.editEngagementSlice.triggerKeywords;
  });
  const messageType = useAppSelector((state) => {
    return state.editEngagementSlice.messageType;
  });
  const reactionList = ["like", "love", "haha", "wow", "sad", "angry"];
  return (
    <div className="flex flex-col gap-4 bg-white p-4">
      <div className="flex flex-1 flex-row justify-between  ">
        <div className="bg-white opacity-60">
          Enable To Privately Reply To First-Level Comments Only
        </div>
        <ToggleSwitch
          defaultVal={privateReplies}
          onSwitch={(checked) => {
            dispatch(togglePrivateReply(checked));
          }}
        />
      </div>
      <div className="flex flex-1 flex-row justify-between  ">
        <div className="bg-white opacity-60">
          Send Message To The Same User Only Once Per Post
        </div>
        <ToggleSwitch
          defaultVal={messageSameUser}
          onSwitch={(checked) => {
            dispatch(toggleMessageSameUserOnlyOnce(checked));
          }}
        />
      </div>
      <h1 className="border-b border-b-base-300">Require a Post Reaction</h1>
      <div className="flex flex-row flex-wrap gap-2">
        {requiredReactions.map((reaction: String) => {
          return (
            <Badge
              onClick={(text) => {
                dispatch(removeRequiredReaction(text));
              }}
              text={reaction}
              img={`/img/reactions/reactions_${reaction}.png`}
            ></Badge>
          );
        })}
      </div>
      <div className="flex flex-row justify-between">
        {reactionList.map((reaction: String) => {
          return (
            <Image
              className="rounded-full p-2 hover:bg-base-300"
              src={`/img/reactions/reactions_${reaction}.png`}
              width={56}
              height={56}
              alt={reaction.toString()}
              onClick={() => dispatch(addRequiredReaction(reaction))}
            />
          );
        })}
      </div>

      <h1 className="">Exclude Comments With These Keywords</h1>
      <div className="flex flex-row flex-wrap gap-2">
        {excludedKeywords.map((keyword: String) => {
          return (
            <Badge
              onClick={(text) => {
                dispatch(removeExcludedKeyword(text));
              }}
              text={keyword}
            ></Badge>
          );
        })}
      </div>
      <KeywordInput
        onClick={(keyword) => {
          dispatch(addExcludedKeyword(keyword));
        }}
      />

      <h1 className="">Only Trigger For Comments With These Keywords</h1>
      <div className="flex flex-row flex-wrap gap-2">
        {triggerKeywords.map((keyword: String) => {
          return (
            <Badge
              onClick={(text) => {
                dispatch(removeTriggerKeyword(text));
              }}
              text={keyword}
            ></Badge>
          );
        })}
      </div>
      <KeywordInput
        onClick={(keyword) => {
          dispatch(addTriggerKeyword(keyword));
        }}
      />

      <h1 className="mb-2.5 border-b border-b-base-300 py-0.5 font-semibold">
        Private Reply After Post Engagement
      </h1>
      <Dropdown
        onChange={(selection) => {
          dispatch(setMessageType(selection));
        }}
        value={messageType}
        options={["Flow"]}
        label={"Select Message Type"}
      />
      <Dropdown
        onChange={(selection) => {
          dispatch(setMessageType(selection));
        }}
        value={messageType}
        options={["Welcome Message", "Default Reply"]}
        label={"Select Flow"}
      />
    </div>
  );
};

export default Settings;
