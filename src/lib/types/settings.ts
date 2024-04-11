type EditEngagementState = {
  activeTab: String;
  activePostSelectionTab: String;
  privatelyReplyToFirstLevelComments: boolean;
  messageSameUserOnlyOnce: boolean;
  automaticallyLikeComments: boolean;
  requiredReactions: String[];
  excludedKeywords: String[];
  triggerKeywords: String[];
  comments: String[];
  messageType: String;
  flow: String;
  commentType: String;
};

export default EditEngagementState;
