import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import sampleData from "../sample_data";
import Record from "../types/record";
import EditEngagementState from "../types/settings";

const initialState: EditEngagementState = {
  activeTab: "",
  activePostSelectionTab: "",
  privatelyReplyToFirstLevelComments: false,
  messageSameUserOnlyOnce: false,
  automaticallyLikeComments: false,
  requiredReactions: [],
  excludedKeywords: [],
  triggerKeywords: [],
  comments: [],
  messageType: "Flow",
  flow: "Welcome Message",
  commentType: "Static",
};

export const editEngagementSlice = createSlice({
  name: "editEngagementSlice",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<String>) => {
      const activeTab = action.payload;
      state.activeTab = activeTab;
      return state;
    },
    setActivePostSelectionTab: (state, action: PayloadAction<String>) => {
      const activeTab = action.payload;
      state.activePostSelectionTab = activeTab;
      return state;
    },
    togglePrivateReply: (state, action: PayloadAction<boolean>) => {
      state.privatelyReplyToFirstLevelComments = action.payload;
      return state;
    },
    toggleMessageSameUserOnlyOnce: (state, action: PayloadAction<boolean>) => {
      state.messageSameUserOnlyOnce = action.payload;
      return state;
    },
    addRequiredReaction: (state, action: PayloadAction<String>) => {
      const reactionSet = new Set(state.requiredReactions);
      reactionSet.add(action.payload);
      state.requiredReactions = Array.from(reactionSet);
      return state;
    },
    removeRequiredReaction: (state, action: PayloadAction<String>) => {
      const reactionToRemove = action.payload;
      state.requiredReactions = state.requiredReactions.filter((reaction) => {
        return reaction != reactionToRemove;
      });
      return state;
    },
    addExcludedKeyword: (state, action: PayloadAction<String>) => {
      const keywordSet = new Set(state.excludedKeywords);
      keywordSet.add(action.payload);
      state.excludedKeywords = Array.from(keywordSet);
      return state;
    },
    removeExcludedKeyword: (state, action: PayloadAction<String>) => {
      const keywordToRemove = action.payload;
      state.excludedKeywords = state.excludedKeywords.filter((reaction) => {
        return reaction != keywordToRemove;
      });
      return state;
    },
    addTriggerKeyword: (state, action: PayloadAction<String>) => {
      const keywordSet = new Set(state.triggerKeywords);
      keywordSet.add(action.payload);
      state.triggerKeywords = Array.from(keywordSet);
      return state;
    },
    removeTriggerKeyword: (state, action: PayloadAction<String>) => {
      const keywordToRemove = action.payload;
      state.triggerKeywords = state.triggerKeywords.filter((reaction) => {
        return reaction != keywordToRemove;
      });
      return state;
    },
    setMessageType: (state, action: PayloadAction<String>) => {
      const messageType = action.payload;
      state.messageType = messageType;
      return state;
    },
    setFlow: (state, action: PayloadAction<String>) => {
      const flow = action.payload;
      state.flow = flow;
      return state;
    },
    setCommentType: (state, action: PayloadAction<String>) => {
      const commentType = action.payload;
      state.commentType = commentType;
      return state;
    },
    addComment: (state) => {
      state.comments.push("");
      return state;
    },
    changeComment: (
      state,
      action: PayloadAction<{ index: number; value: String }>,
    ) => {
      const { index, value } = action.payload;
      state.comments[index] = value;
      return state;
    },
    removeComment: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.comments = state.comments.filter((_, idx) => {
        return idx != index;
      });
      return state;
    },
    loadSettingsFromRecord: (
      state,
      action: PayloadAction<EditEngagementState>,
    ) => {
      state = action.payload;
      return state;
    },
    clear: (state) => {
      state = {
        activeTab: "",
        activePostSelectionTab: "",
        privatelyReplyToFirstLevelComments: false,
        messageSameUserOnlyOnce: false,
        automaticallyLikeComments: false,
        requiredReactions: [],
        excludedKeywords: [],
        triggerKeywords: [],
        comments: [],
        messageType: "Flow",
        flow: "Welcome Message",
        commentType: "Static",
      };
      return state;
    },
  },
});

export const {
  setActiveTab,
  togglePrivateReply,
  toggleMessageSameUserOnlyOnce,
  addRequiredReaction,
  removeRequiredReaction,
  addExcludedKeyword,
  removeExcludedKeyword,
  addTriggerKeyword,
  removeTriggerKeyword,
  setMessageType,
  setFlow,
  setCommentType,
  addComment,
  changeComment,
  removeComment,
  setActivePostSelectionTab,
  loadSettingsFromRecord,
  clear,
} = editEngagementSlice.actions;
export default editEngagementSlice.reducer;
