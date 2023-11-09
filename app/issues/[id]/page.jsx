import { Box, Grid, Flex } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
// import { getServerSession } from "next-auth";
// import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";

const IssueDetailsPage = async ({ params }) => {
//   const session = await getServerSession(authOptions);

  const issue = await prisma.issues.findUnique({
    where: { id: parseInt(params.id) },
  });

  if(!issue) return notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="4">
      <Box className="md:col-span-4">
        <IssueDetails issues={issue} />
      </Box>
      {/* {session && ( */}
        <Box className="w-4/5">
          <Flex direction="column" gap="4">
            <EditIssueButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </Flex>
        </Box>
      {/* )} */}
    </Grid>
  );
};

export default IssueDetailsPage;
