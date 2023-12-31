"use client";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { BsPencilSquare } from "react-icons/bs";

const EditIssueButton = ({ issueId }) => {
  return (
    <Button>
      <BsPencilSquare />
      <Link href={`/issues/edit/${issueId}`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
