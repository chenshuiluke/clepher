"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import Image from "next/image";
import Tab from "./_components/Tab";
import Tabs from "./_components/Tabs";
import ToggleSwitch from "./_components/ToggleSwitch";
import { useSelector } from "react-redux";
import {
  addRequiredReaction,
  clear,
  loadSettingsFromRecord,
  removeRequiredReaction,
  toggleMessageSameUserOnlyOnce,
  togglePrivateReply,
} from "@/lib/slices/editEngagementSlice";
import Badge from "./_components/Badge";
import Settings from "./_components/Settings";
import AutoResponse from "./_components/AutoResponse";
import PostInput from "./_components/PostInput";
import SmallButton from "./_components/SmallButton";
import { useParams, useRouter } from "next/navigation";
import { savePost } from "@/lib/slices/postEngagementSlice";
import { useEffect } from "react";
const PostEngagementEditor = () => {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => {
    return state.editEngagementSlice;
  });
  const record = useAppSelector((state) => {
    const id = parseInt(params.id);
    const index = state.postEngagementSlice.data.findIndex(
      (record) => record.id == id,
    );
    if (index > -1) {
      const record = state.postEngagementSlice.data[index];
      return record;
    }
    return null;
  });
  useEffect(() => {
    if (record?.settings != null) {
      dispatch(loadSettingsFromRecord(record.settings));
    }
  }, []);
  return (
    <>
      <div className="flex w-full justify-end p-8 py-2">
        <SmallButton
          onClick={() => {
            dispatch(savePost({ settings, id: parseInt(params.id) }));
            router.push("/capture-tools/post-engagements/");
            dispatch(clear());
          }}
          text={"Save"}
        ></SmallButton>
      </div>
      <div className="flex flex-row  p-8">
        <div className="flex basis-2/5 flex-col  border-r border-r-base-300 bg-white">
          <Tabs tabs={[{ title: "Settings" }, { title: "Auto Response" }]}>
            <Tab title="Settings">
              <Settings />
            </Tab>
            <Tab title="Auto Response">
              <AutoResponse />
            </Tab>
          </Tabs>
        </div>
        <div className="basis-3/5 bg-white">
          <Tabs
            tabs={[
              { title: "Select A Post", isForPostSelection: true },
              { title: "Post ID / URL", isForPostSelection: true },
            ]}
            postSelection={true}
          >
            <Tab title="Select A Post" postSelection={true}>
              <div className="flex place-content-center py-1">
                Select A Post
              </div>
            </Tab>
            <Tab title="Post ID / URL" postSelection={true}>
              <div className="p-8">
                <PostInput />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default PostEngagementEditor;
